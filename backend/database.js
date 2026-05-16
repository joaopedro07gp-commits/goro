const admin = require('firebase-admin');
const path = require('path');
// No Vercel, o dotenv não é necessário, mas mantemos para desenvolvimento local
require('dotenv').config();

let db;

function parseServiceAccount(raw) {
  if (!raw) return null;
  
  let str = raw.trim();
  if ((str.startsWith("'") && str.endsWith("'")) || (str.startsWith('"') && str.endsWith('"'))) {
    str = str.slice(1, -1);
  }

  try {
    str = str.replace(/\\"/g, '"');
    const config = JSON.parse(str);
    if (config.private_key && typeof config.private_key === 'string') {
      config.private_key = config.private_key.replace(/\\n/g, '\n');
    }
    return config;
  } catch (e) {
    console.error('❌ Erro crítico no JSON do Firebase:', e.message);
    return null;
  }
}

try {
  const rawConfig = process.env.FIREBASE_SERVICE_ACCOUNT;
  
  if (rawConfig) {
    const serviceAccount = parseServiceAccount(rawConfig);
    if (serviceAccount && !admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      db = admin.firestore();
      console.log('🔥 Firebase Admin SDK inicializado com sucesso.');
    } else if (admin.apps.length) {
      db = admin.firestore();
    }
  }
} catch (error) {
  console.error('❌ Erro inesperado ao inicializar Firebase:', error.message);
}

module.exports = db;
