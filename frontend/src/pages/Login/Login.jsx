import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="login-page">
      {/* Ornamentos de fundo em círculos */}
      <div className="bg-ornament top-right"></div>
      <div className="bg-ornament bottom-left"></div>

      <div className="login-container">
        
        {/* Marca IBI */}
        <div className="brand-header">
          <svg className="adinkra-icon" viewBox="0 0 100 100" fill="none" stroke="#C45525" strokeWidth="2">
            <circle cx="50" cy="50" r="38" strokeOpacity="0.6" />
            <circle cx="50" cy="50" r="28" strokeDasharray="2 3" strokeOpacity="0.8" />
            <circle cx="50" cy="50" r="14" />
            <circle cx="50" cy="50" r="4" fill="#C45525" />
            <line x1="50" y1="5" x2="50" y2="95" strokeOpacity="0.4" />
            <line x1="5" y1="50" x2="95" y2="50" strokeOpacity="0.4" />
            <rect x="42" y="42" width="16" height="16" transform="rotate(45 50 50)" strokeOpacity="0.7" />
          </svg>
          <h1 className="brand-title">IBI</h1>
          <span className="brand-subtitle">PRODUTOS E SERVIÇOS SAGRADOS</span>
        </div>

        {/* Título e Subtítulo */}
        <div className="form-header">
          <h2>Bem-vindo de volta</h2>
          <p>Entre na sua conta para continuar sua jornada espiritual.</p>
        </div>

        {/* Formulário */}
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Telefone ou e-mail</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <input 
                id="email"
                type="text"
                placeholder="(00) 00000-0000"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="password">Senha</label>
            <div className="input-wrapper">
              <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <input 
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha"
              />
              <button 
                type="button" 
                className="password-toggle-btn"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Ocultar senha" : "Exibir senha"}
              >
                {showPassword ? (
                  /* Ícone Olho Riscado (Senha Visível) */
                  <svg className="password-toggle" viewBox="0 0 24 24" fill="none" stroke="#BBB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  /* Ícone Olho Normal (Senha Oculta) */
                  <svg className="password-toggle" viewBox="0 0 24 24" fill="none" stroke="#BBB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <a href="#" className="forgot-link">Esqueci minha senha</a>

          <button type="submit" className="btn-main">
            Entrar na conta
          </button>
        </form>

        <span className="divider">ou</span>

        {/* Botões Sociais */}
        <div className="social-group">
          <button type="button" className="btn-social">
            <svg className="social-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.15C3.26 21.3 7.31 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.24c-.25-.72-.38-1.49-.38-2.24s.13-1.52.38-2.24V6.61H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.39l3.99-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.61l3.99 3.15c.95-2.85 3.6-4.96 6.72-4.96z"/>
            </svg>
            Google
          </button>
          <button type="button" className="btn-social">
            <svg className="social-icon" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>

        {/* Rodapé */}
        <p className="footer-text">
          Novo no IBI? <Link to="/cadastro">Criar conta gratuita</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;