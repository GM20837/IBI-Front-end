import { useEffect } from "react";
import "./WelcomeScreen.css";

function WelcomeScreen({ accountType = "usuario", userName = "Usuário", onComplete }) {
  useEffect(() => {
    // 4.5s -> Redirecionamento final após o fade-out total
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  // Configurações personalizadas de textos, emojis e pílulas por perfil
  const roleData = {
    usuario: {
      emoji: "🙏",
      subtitle: "Cadastro concluído! Em breve você poderá fazer seus pedidos.",
      pills: ["Entrega discreta", "Produtos sagrados", "Atendimento ágil"]
    },
    entregador: {
      emoji: "🛵",
      subtitle: "Cadastro concluído! Em breve você receberá sua confirmação de entregador.",
      pills: ["Ganhos rápidos", "Horários livres", "Suporte 24h"]
    },
    casa_religiao: {
      emoji: "🕌",
      subtitle: "Cadastro concluído! Sua vitrine espiritual está sendo preparada.",
      pills: ["Vitrine digital", "Gestão de estoque", "Alcance comunitário"]
    },
    loja: {
      emoji: "🕌",
      subtitle: "Cadastro concluído! Sua vitrine espiritual está sendo preparada.",
      pills: ["Vitrine digital", "Gestão de estoque", "Alcance comunitário"]
    }
  };

  const currentRole = roleData[accountType] || roleData.usuario;

  return (
    <div className={`welcome-screen-root ${accountType}`}>
      {/* Listras tricolores de fundo (Top & Bottom) */}
      <div className="stripe-bar stripe-top" />
      <div className="stripe-bar stripe-bottom" />

      {/* Anéis concêntricos de fundo (Ambient Rings) */}
      <div className="ambient-rings">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
      </div>

      <div className="welcome-content">
        {/* Adinkra Mark (0.15s) */}
        <div className="adinkra-wrapper">
          <svg className="adinkra-svg" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" />
            <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.2" />
            <circle cx="50" cy="18" r="4" fill="currentColor" />
            <circle cx="50" cy="82" r="4" fill="currentColor" />
            <circle cx="18" cy="50" r="4" fill="currentColor" />
            <circle cx="82" cy="50" r="4" fill="currentColor" />
          </svg>
        </div>

        {/* Wordmark "IBI" (0.35s) */}
        <h1 className="ibi-wordmark">IBI</h1>

        {/* Emoji de Perfil em Spring (0.55s) */}
        <div className="role-emoji-spring">{currentRole.emoji}</div>

        {/* Saudação Personalizada "Olá, [nome]!" (0.65s) */}
        <h2 className="greeting-text">Olá, {userName}!</h2>

        {/* Subtítulo descritivo (0.82s) */}
        <p className="subtitle-text">{currentRole.subtitle}</p>

        {/* 3 Feature Pills em Staggered (0.9s - 1.6s) */}
        <div className="feature-pills">
          {currentRole.pills.map((pillText, index) => (
            <span key={index} className={`pill pill-${index + 1}`}>
              {pillText}
            </span>
          ))}
        </div>

        {/* Bouncing Loading Dots (2.0s) */}
        <div className="bouncing-dots">
          <span className="dot dot-1" />
          <span className="dot dot-2" />
          <span className="dot dot-3" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;