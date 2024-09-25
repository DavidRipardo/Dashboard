import React, { useState, useEffect} from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import imglogin from "/src/assets/login.png";
import imglogo from "/src/assets/logo.png";
import imgesqueceusenha from "/src/assets/esqueceusenha.png";
import "remixicon/fonts/remixicon.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from 'react-router-dom'

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("") ;
  const [password, setPassword] = useState("");
  const {loginUser, isAutenticado} = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (isAutenticado || localStorage.getItem('token')) {
      navigate("/dashboard", {replace: true});
    }
  }, [isAutenticado, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser({email, password});
    } catch (error) {
      console.log(error)
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col h-full w-full bg-white">
      <main className="w-full h-full flex flex-col  md:flex-row ">
        <section className=" hidden md:flex w-full ">
          <div className="flex rounded-r-[320px] border border-l-0 border-[#5867DD] w-full  bg-[#f7f7f7] items-center justify-center">
            <img
              className="aspect-[1] object-contain w-[60%] "
              loading="lazy"
              src={imglogin}
              alt="Logo"
            />
          </div>
        </section>
        <section className="flex flex-col items-center w-full text-[#5867DD] font-normal p-5 gap-1">
  <form
    onSubmit={handleSubmit}
    className="flex flex-col justify-center items-center text-center gap-4 w-full max-w-[400px]  py-20"
  >
    <header className="text-center">
      <div className="flex items-center gap-4 text-lg text-black font-bold justify-center">
        <img
          className="aspect-[1.1] object-contain w-[37px]"
          loading="lazy"
          src={imglogo}
          alt="Login logo"
        />
        <h1 className="font-montserrat text-3xl">Tela de login</h1>
      </div>
      <h2 className="text-black text-xl p-4 font-semibold">Bem vindo!</h2>
      <p className="text-[#777] text-lg font-normal">
        Faça login para entrar no dashboard.
      </p>
    </header>

    <div className="w-full mt-6">
      <div className="relative p-4">
        <input
          id="email"
          type="email"
          placeholder="Usuário"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 pl-10 py-3 border border-lilac-500 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-lilac-300 placeholder:text-lilac-500 "
        />
        <i className="ri-user-3-line absolute left-7 text-2xl top-1/2 transform -translate-y-1/2 text-lilac-500"></i>
      </div>
    </div>

    <div className="w-full">
      <div className="relative">
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-[91%] px-3 py-3 pl-10 border border-lilac-500 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-lilac-300 placeholder:text-lilac-500"
        />
        <i className="ri-lock-line absolute left-7 text-2xl top-1/2 transform -translate-y-1/2 text-lilac-500"></i>
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-4 pr-3 flex items-center"
        >
          {showPassword ? (
            <i className="ri-eye-line text-lg text-lilac-500"></i>
          ) : (
            <i className="ri-eye-off-line text-lg text-lilac-500"></i>
          )}
        </button>
      </div>
    </div>

    <div className="flex float-left w-full pl-3 gap-2 ">
      <input type="checkbox" className="w-4 h-4" />
      <label className="text-black text-sm font-normal">Lembrar-se</label>
    </div>
    <button
      type="submit"
      className="bg-[#5867DD] text-white text-sm font-bold text-center rounded-full p-[15px_100px] w-full mt-4 transition-colors duration-300 hover:bg-[#4559f3]"
    >
      ENTRAR
    </button>
    <a
      href="#"
      className="flex items-center justify-center gap-2 text-[#5867DD] text-sm font-normal"
    >
      <img className="w-[14px]" loading="lazy" src={imgesqueceusenha} alt="Forgot password icon" />
      <span>Esqueceu a senha?</span>
    </a>
  </form>

  <footer className="flex items-end w-full justify-between  text-center md:relative md:top-5 ">
    <span className="text-sm text-[#777] md:relative md:right-32">
      <span className="text-[#5867DD]">© 2024</span> | Todos os direitos reservados
    </span>
    <div className="flex gap-5">
      <a href="#" className="text-[#5867DD] text-sm transition-all hover:underline">Privacidade</a>
      <a href="#" className="text-[#5867DD] text-sm transition-all hover:underline">Termos</a>
      <a href="#" className="text-[#5867DD] text-sm transition-all hover:underline">Contato</a>
    </div>
  </footer>
</section>

      </main>
    </div>
  );
};
