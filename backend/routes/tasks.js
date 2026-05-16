const express = require('express');
const router = express.Router();
const db = require('../database');
const authenticateToken = require('../middleware/auth');

function serverError(res, status, message) {
  console.error(`[${status}] ${message}`);
  return res.status(status).json({ error: message });
}

router.get('/', authenticateToken, async (req, res) => {
  if (!db) return serverError(res, 500, 'Banco de dados não inicializado.');
  try {
    const snapshot = await db.collection('Tasks').where('user_id', '==', req.user.id).get();
    const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(tasks);
  } catch (err) {
    return serverError(res, 500, 'Erro ao buscar tarefas');
  }
});

router.post('/', authenticateToken, async (req, res) => {
  if (!db) return serverError(res, 500, 'Banco de dados não inicializado.');
  const { title, description, status, priority } = req.body;
  if (!title) return serverError(res, 400, 'O título é obrigatório');

  try {
    const taskData = {
      user_id: req.user.id,
      title,
      description: description || '',
      status: status || 'todo',
      priority: priority || 'medium',
      created_at: new Date().toISOString()
    };
    const newTaskRef = await db.collection('Tasks').add(taskData);
    res.status(201).json({ id: newTaskRef.id, ...taskData });
  } catch (err) {
    return serverError(res, 500, 'Erro ao criar tarefa');
  }
});

// Outros métodos (PUT, DELETE) podem ser adicionados aqui conforme necessário

module.exports = router;
