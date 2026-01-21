import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const whatsappNumber = '21969888896';
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/e64f9e8b-323c-4145-b55f-56ca52a0cc94/players/69701b2681b3e0e687bc20bb/v4/player.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 180000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <main className="max-w-6xl mx-auto px-4 py-12 w-full">
        <div className="mb-8 md:mb-10">
          <div className="w-full max-w-4xl mx-auto">
            <vturb-smartplayer
              id="vid-69701b2681b3e0e687bc20bb"
              style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '900px' }}
            />
          </div>
        </div>

        {showButton && (
          <div className="text-center">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4"
            >
              <MessageCircle size={24} />
              clique aqui
            </button>
            <p className="text-sm text-gray-400">
              Atendimento confidencial e individual.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
