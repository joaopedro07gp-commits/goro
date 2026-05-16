import React from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import { useToast } from '../components/Toast';

const products = [
  {
    id: 1,
    name: "UVA ELÉTRICA",
    price: "R$ 14,90",
    desc: "Explosão Cítrica: O frescor da festa sem o crash da cafeína.",
    tags: ["+ Vitamin B12", "Electrolytes", "Zero Sugar"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJU6w9pr41wn9f14i0X-4F9MqIr-w4WKVj9OFIlXe-ofxbCOAtApEES1tDi0V8cY-1SJ7TKB6eSZnYC6Osux-T0eYBtXCJFQALViWVi5AU7VFVPPuwJnUBF8NIZJjtX2DRl9VnnsO5HaiTYwBfFNlBQSmni6Z2Xjy-XyH9PWbhBbdmpe4b7gnIBGz3MYl5oUpatzYoiSB78FsgwYmd2p-Wh50WoTbw0pP5rmMJ6VytRmqgGob6IRYzB1birVZJz4Y2MuQ5XGaLVgIV",
    color: "product-gradient-purple",
    glow: "neon-purple-glow"
  },
  {
    id: 2,
    name: "LIME FREEZE",
    price: "R$ 14,90",
    desc: "O gelo da madrugada. Ultra-hidratação com toque de menta polar.",
    tags: ["Magnesium", "Potassium", "Antioxidants"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHcf1MvbMRA4L7IiiSAPOGYvXjv4ijBnY3YjdyC4YJoiC5rZe-c6sv_c-GGnfXsE1clogapBlgMCuZAqeYkYWIomPbXANhPFtkk5zoWSGBrK2QzTl-lTsQ8V_etkLhJyi7GQlADbbF-j0iArlG4Or5R0dJsNqg7_OEt7m5GkPYDxohqxdXMdW8kRM6UVXyFMa-dqRIC3pCzer8gw-TEKitd6ofKhS8wSsCfFJXUbngejRChZ0vIov7Su-e5UZW0MiIx2Y2BNYzcCqZ",
    color: "product-gradient-green",
    glow: "neon-green-glow"
  },
  {
    id: 3,
    name: "BLUE DREAM",
    price: "R$ 16,90",
    desc: "Foco total. Nootropic-blend para noites que exigem clareza absoluta.",
    tags: ["L-Theanine", "Zinc", "Damage Ctrl"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgYzhhSbT9ks0VJzMnTitO3TAKlZ6AaEh0_GsEVmbSK9i2J8Ieww6ErloUUBbDcTKm97XUQjdxUPR7xmQZvmJlu5fQpZPSoCWojccnCqimRkoy5x6aq3XgoJS1pBW87HfwNNUsVqGXF6qkJP_5XFzBxnVIlSrfBMTHnwTtBliU1s4j-YTrDZ1t-ireOdzr0dSJK1cdJiJ7wAdj99-cz3emnoIkROLIl7EAN7ATdqbjNIGBHYjZoF62SymZf_QuG5spuRUV3O0FaCv1",
    color: "bg-gradient-to-b from-blue-900/10 to-transparent",
    glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]"
  }
];

const Catalog = () => {
  const { showToast } = useToast();
  return (
    <main className="relative min-h-screen pt-20">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-primary-container/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-[100px] pointer-events-none"></div>

      <section className="px-6 py-20 max-w-screen-2xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h1 className="font-space-grotesk text-5xl md:text-7xl font-bold text-on-background mb-4">
              CATÁLOGO <span className="text-secondary-container">OFICIAL</span>
            </h1>
            <p className="font-be-vietnam-pro text-lg text-outline max-w-lg">
              O combustível premium para a Mansão Maromba. Hidratação inteligente com redução de danos para quem não para.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className={`group glass-card rounded-xl overflow-hidden flex flex-col relative ${product.color} p-8 transition-transform duration-500 hover:-translate-y-2`}>
              <div className="relative h-80 flex items-center justify-center mb-8">
                <div className="absolute w-40 h-40 bg-white/10 blur-[60px] rounded-full group-hover:bg-white/20 transition-all"></div>
                <img 
                  alt={product.name} 
                  className="h-full object-contain relative z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]" 
                  src={product.img} 
                />
              </div>
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-space-grotesk text-2xl font-bold text-white">{product.name}</h3>
                  <span className="text-secondary-fixed text-xl font-bold">{product.price}</span>
                </div>
                <p className="text-outline text-sm mb-6 italic">{product.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to="/checkout" 
                  onClick={() => showToast(`${product.name} adicionado ao pack!`)}
                  className={`w-full py-4 text-center font-bold uppercase tracking-widest rounded-lg transition-all ${
                    product.id === 1 ? 'bg-primary-container text-white neon-purple-glow' : 'border-2 border-secondary-container text-secondary-container hover:bg-secondary-container hover:text-black'
                  }`}
                >
                  ADICIONAR AO CORRE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Ticker text="REDUÇÃO DE DANOS • ENERGY BOOST ZERO CRASH • VIBE ALTA PERFORMANCE" />
    </main>
  );
};

export default Catalog;
