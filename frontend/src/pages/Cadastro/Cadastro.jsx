import { useState } from "react";
import "./Cadastro.css";
import { Link, useNavigate } from "react-router-dom";

import WelcomeScreen from "../../components/ui/WelcomeScreen/WelcomeScreen";

function Cadastro() {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState("usuario");
  const [showPassword, setShowPassword] = useState(false);
  
  // Estado para disparar a tela de boas-vindas
  const [showWelcome, setShowWelcome] = useState(false);

  // Estado unificado dos campos
  const [formData, setFormData] = useState({
    nome: "",
    nomeLoja: "",
    email: "",
    telefone: "",
    senha: ""
  });

  const navigate = useNavigate();

  // Validações em tempo real da senha
  const hasMinLength = formData.senha.length >= 8;
  const hasUppercase = /[A-Z]/.test(formData.senha);
  const hasNumber = /[0-9]/.test(formData.senha);
  const isPasswordValid = hasMinLength && hasUppercase && hasNumber;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate("/login");
    }
  };

  // Dispara a animação ao enviar o formulário final
  const handleSubmitFinal = (e) => {
    e.preventDefault();
    if (isPasswordValid) {
      // Aqui você integraria com a API/Backend para salvar o usuário.
      // Ativa a Animação de Boas-Vindas:
      setShowWelcome(true);
    }
  };

  // Se o cadastro for concluído, renderiza a animação de boas-vindas
  if (showWelcome) {
    // Mapeia o tipo de perfil para o padrão esperado pelo WelcomeScreen
    const mappedAccountType = selectedRole === "loja" ? "casa_religiao" : selectedRole;
    const userName = selectedRole === "loja" ? formData.nomeLoja : formData.nome;

    return (
      <WelcomeScreen
        accountType={mappedAccountType}
        userName={userName || "Usuário"}
        onComplete={() => navigate("/dashboard")}
      />
    );
  }

  return (
    <div className="register-page">
      <div className="register-card">
        
        {/* Header */}
        <header className="register-header">
          <button type="button" className="btn-back" onClick={handlePrevStep}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>{step === 1 ? "Já tenho conta" : "Voltar"}</span>
          </button>

          <div className="mini-logo">
            <span className="logo-text">IBI</span>
          </div>
        </header>

        {/* Indicador de Passo */}
        <span className="step-indicator">Passo {step} de 3</span>

        {/* ================= PASSO 1: SELEÇÃO DE PERFIL ================= */}
        {step === 1 && (
          <>
            <div className="register-title-group">
              <h1>Criar conta gratuita</h1>
              <p>Como você quer usar o IBI? Escolha o perfil que melhor te representa.</p>
            </div>

            <div className="role-options">
              <div 
                className={`role-card usuario ${selectedRole === "usuario" ? "selected" : ""}`}
                onClick={() => setSelectedRole("usuario")}
              >
                <div className="role-top">
                  <div className="role-icon-wrapper">
                    <span className="role-emoji">🙏</span>
                  </div>
                  <div className="role-info">
                    <h3>Usuário</h3>
                    <span className="role-tag">Quero comprar</span>
                    <p>Acesse produtos, oferendas e serviços espirituais entregues na sua porta.</p>
                  </div>
                  <div className="custom-radio"></div>
                </div>

                {selectedRole === "usuario" && (
                  <ul className="role-benefits">
                    <li>Entrega rápida e discreta</li>
                    <li>Produtos 100% autênticos</li>
                    <li>Atendimento especializado</li>
                  </ul>
                )}
              </div>

              <div 
                className={`role-card entregador ${selectedRole === "entregador" ? "selected" : ""}`}
                onClick={() => setSelectedRole("entregador")}
              >
                <div className="role-top">
                  <div className="role-icon-wrapper">
                    <span className="role-emoji">🛵</span>
                  </div>
                  <div className="role-info">
                    <h3>Entregador</h3>
                    <span className="role-tag">Quero entregar</span>
                    <p>Faça entregas de produtos sagrados e ganhe por cada pedido realizado.</p>
                  </div>
                  <div className="custom-radio"></div>
                </div>

                {selectedRole === "entregador" && (
                  <ul className="role-benefits">
                    <li>Aceite pedidos próximos</li>
                    <li>Receba por entrega</li>
                    <li>Horários flexíveis</li>
                    <li>Suporte dedicado</li>
                  </ul>
                )}
              </div>

              <div 
                className={`role-card loja ${selectedRole === "loja" ? "selected" : ""}`}
                onClick={() => setSelectedRole("loja")}
              >
                <div className="role-top">
                  <div className="role-icon-wrapper">
                    <span className="role-emoji">🕌</span>
                  </div>
                  <div className="role-info">
                    <h3>Loja Religiosa</h3>
                    <span className="role-tag">Quero vender</span>
                    <p>Cadastre seu terreiro ou loja e venda produtos e serviços para toda a comunidade.</p>
                  </div>
                  <div className="custom-radio"></div>
                </div>

                {selectedRole === "loja" && (
                  <ul className="role-benefits">
                    <li>Vitrine digital completa</li>
                    <li>Gestão simples de vendas</li>
                    <li>Alcance mais clientes</li>
                  </ul>
                )}
              </div>
            </div>

            <button 
              type="button" 
              className={`btn-continue ${selectedRole}`}
              onClick={handleNextStep}
            >
              Continuar
            </button>
          </>
        )}

        {/* ================= PASSO 2: SEUS DADOS ================= */}
        {step === 2 && (
          <div className="step-two-container">
            <div className="step-two-header">
              <div className={`user-badge-group ${selectedRole}`}>
                <span className="badge-emoji">
                  {selectedRole === "usuario" && "🙏"}
                  {selectedRole === "entregador" && "🛵"}
                  {selectedRole === "loja" && "🕌"}
                </span>
                <span className="badge-text">
                  {selectedRole === "usuario" && "Usuário"}
                  {selectedRole === "entregador" && "Entregador"}
                  {selectedRole === "loja" && "Loja Religiosa"}
                </span>
              </div>
              <h1>Seus dados</h1>
              <p>
                {selectedRole === "loja" 
                  ? "Informe os dados do responsável pela loja" 
                  : "Preencha suas informações para criar o perfil"}
              </p>
            </div>

            <form className="step-two-form" onSubmit={(e) => { e.preventDefault(); handleNextStep(); }}>
              <div className="input-group">
                <label>
                  {selectedRole === "loja" ? "Nome do responsável" : "Seu nome completo"}
                </label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <input 
                    type="text" 
                    name="nome"
                    placeholder={selectedRole === "loja" ? "Nome do titular da conta" : "Como devemos te chamar?"} 
                    value={formData.nome}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {selectedRole === "loja" && (
                <div className="input-group">
                  <label>Nome da loja / terreiro</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8">
                      <path d="M3 21h18M3 7l9-4 9 4v14H3V7z"></path>
                    </svg>
                    <input 
                      type="text" 
                      name="nomeLoja"
                      placeholder="Ex: Casa de Ossain" 
                      value={formData.nomeLoja}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}

              {selectedRole !== "loja" && (
                <div className="input-group">
                  <label>E-mail</label>
                  <div className="input-wrapper">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="seu@email.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}

              <div className="input-group">
                <label>
                  {selectedRole === "loja" ? "Telefone comercial" : "Telefone (opcional)"}
                </label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <input 
                    type="text" 
                    name="telefone"
                    placeholder="(00) 00000-0000" 
                    value={formData.telefone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {selectedRole === "entregador" && (
                <div className="info-box-entregador">
                  <svg className="info-box-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    <line x1="7" y1="8" x2="17" y2="8"></line>
                    <line x1="7" y1="12" x2="11" y2="12"></line>
                  </svg>
                  <p>
                    Para ativar sua conta de entregador, você precisará enviar uma foto da CNH ou RG após o cadastro.
                  </p>
                </div>
              )}

              <button type="submit" className={`btn-continue ${selectedRole}`}>
                Continuar
              </button>
            </form>
          </div>
        )}

        {/* ================= PASSO 3: CRIAÇÃO DE SENHA ================= */}
        {step === 3 && (
          <div className="step-three-container">
            <div className="user-profile-card">
              <div className="avatar-circle">
                {formData.nome ? formData.nome.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="user-info">
                <p className="user-name">{formData.nome || "Novo Usuário"}</p>
                <p className="user-role">
                  {selectedRole === "usuario" && "Usuário"}
                  {selectedRole === "entregador" && "Entregador"}
                  {selectedRole === "loja" && (formData.nomeLoja || "Loja Religiosa")}
                </p>
              </div>
              <button type="button" className="btn-edit" onClick={() => setStep(2)}>
                Editar
              </button>
            </div>

            <div className="step-three-header">
              <h1>Crie sua senha</h1>
              <p>Use uma senha segura para proteger sua conta no IBI</p>
            </div>

            <form className="step-three-form" onSubmit={handleSubmitFinal}>
              <div className="input-group">
                <label htmlFor="senha">Senha</label>
                <div className="input-wrapper">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.8">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <input
                    id="senha"
                    type={showPassword ? "text" : "password"}
                    name="senha"
                    placeholder="Mínimo 8 caracteres"
                    value={formData.senha}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg className="password-toggle" viewBox="0 0 24 24" fill="none" stroke="#BBB" strokeWidth="1.8">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    ) : (
                      <svg className="password-toggle" viewBox="0 0 24 24" fill="none" stroke="#BBB" strokeWidth="1.8">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="password-requirements">
                <div className={`requirement-item ${hasMinLength ? "valid" : ""}`}>
                  <span className="check-circle"></span>
                  <span>Mínimo 8 caracteres</span>
                </div>
                <div className={`requirement-item ${hasUppercase ? "valid" : ""}`}>
                  <span className="check-circle"></span>
                  <span>Uma letra maiúscula</span>
                </div>
                <div className={`requirement-item ${hasNumber ? "valid" : ""}`}>
                  <span className="check-circle"></span>
                  <span>Um número</span>
                </div>
              </div>

              <p className="terms-text">
                Ao criar uma conta você concorda com os <a href="#">Termos de Uso</a> e <a href="#">Política de Privacidade</a>
              </p>

              <button
                type="submit"
                className={`btn-continue ${selectedRole}`}
                disabled={!isPasswordValid}
              >
                Criar minha conta
              </button>
            </form>
          </div>
        )}

        {/* Rodapé */}
        <p className="register-footer">
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>

      </div>
    </div>
  );
}

export default Cadastro;