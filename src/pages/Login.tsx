import React, { useState } from 'react';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import imglogin from "/src/assets/login.png";
import imglogo from "/src/assets/logo.png";
import imgesqueceusenha from "/src/assets/esqueceusenha.png";
import 'remixicon/fonts/remixicon.css'; // Importa a biblioteca RemixIcon

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col w-auto bg-white">
      <main className="w-[70%] flex flex-col md:flex-row">
        <section className="flex w-[70%] md:w-full">
          <div className="relative right-[32%] rounded-r-[500px] border border-l-0 border-[#5867DD] w-[73vw] h-[118%] bg-[#f7f7f7] flex items-center justify-center p-[124px_70px] md:p-[10px_20px]">
            <img
              className="aspect-[1] object-contain relative left-[15%] w-[40%] max-w-full "
              loading="lazy"
              src={imglogin}
              alt="Logo"
            />
          </div>
        </section>
        <section className="flex flex-col w-full text-[#5867DD] font-normal p-[20px_0]">
          <form
            className="flex relative justify-center text-center items-center top-[15%] right-[35%] w-[400px] gap-2.5 max-w-full flex-col p-[20px_0] md:mt-[40px] md:p-[0_20px]"
          >
            <header className="text-center justify-center">
              <div className="flex gap-4 text-lg text-black font-bold items-center justify-center">
                <img
                  className="aspect-[1.1] object-contain w-[37px]"
                  loading="lazy"
                  src={imglogo}
                  alt="Login logo"
                />
                <h1 className="font-montserrat text-3xl">Tela de login</h1>
              </div>
              <h2 className="text-black text-xl p-[10px] font-semibold md:mt-[30px]">
                Bem vindo!
              </h2>
              <p className="text-[#777] text-lg font-normal">
                Faça login para entrar no dashboard.
              </p>
            </header>
        
            <div className="w-[23vw] mt-6"> 
              <div className="relative p-4">
                <input
                  id="email"
                  type="email"
                  placeholder="Usuário"
                  className="w-full px-3 py-2 pl-10 border border-lilac-500 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-lilac-300 placeholder:text-lilac-500"
                />
                <i className="ri-user-3-line absolute left-7 text-xl top-1/2 transform -translate-y-1/2 text-lilac-500"></i>
              </div>
            </div>
            
            <div className="w-[21vw]"> 
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  className="w-full px-3 py-2 pl-10 border border-lilac-500 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-lilac-300 placeholder:text-lilac-500"
                />
                <i className="ri-lock-line absolute left-3 text-xl top-1/2 transform -translate-y-1/2 text-lilac-500"></i>
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <i className="ri-eye-line text-lg text-lilac-500"></i>
                  ) : (
                    <i className="ri-eye-off-line text-lg text-lilac-500"></i>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center pr-[200px] gap-2 mt-1.5 mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
              />
              <label className="text-black text-sm font-normal">Lembrar-se</label>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center bg-[#5867DD] text-white text-sm font-bold text-center border-none rounded-full p-[15px_100px] mt-2.5 mb-2.5 cursor-pointer transition-colors duration-300 hover:bg-[#4559f3]"
            >
              ENTRAR <span className="icon-arrow"></span>
            </button>
            <a href="#" className="flex items-center justify-center gap-2 no-underline text-[#5867DD] text-sm font-normal">
              <img
                className="w-[14px]"
                loading="lazy"
                src={imgesqueceusenha}
                alt="Forgot password icon"
              />
              <span>Esqueceu a senha?</span>
            </a>
          </form>
          <footer className="flex justify-between relative items-center top-[18%] md:flex-col md:gap-2.5">
            <span className="text-sm relative w-[20vw] top-[95%] right-[120%] text-[#777]">
              <span className="highlight text-[#5867DD]">© 2024 </span> | Todos os direitos reservados
            </span>
            <div className="flex relative top-[30%] left-[25%]   gap-5">
              <a href="#" className="no-underline text-[#5867DD] text-sm transition-all hover:underline">Privacidade</a>
              <a href="#" className="no-underline text-[#5867DD] text-sm transition-all hover:underline">Termos</a>
              <a href="#" className="no-underline text-[#5867DD] text-sm transition-all hover:underline">Contato</a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};
