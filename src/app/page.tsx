"use client"
import React from 'react';

import { signIn } from "next-auth/react"
import { useSearchParams } from 'next/navigation';

const LoginPage = () => {

  const searchParams = useSearchParams()

  const error = searchParams.get("error")

  async function handleSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      email: formData.get("email"),
      password: formData.get("password")
    }

    signIn("credentials", {
      ...data,
      callbackUrl: "/dashboard"
    })

  }

  return (
    <div className="flex justify-center min-h-screen">
      <div className="flex flex-col justify-center p-8 bg-white shadow-md rounded-lg min-h-screen w-[900px]">
        <div className="flex justify-center mb-4">
          <img width={268.88} height={226.04} src="/svg/logo-loomi-dashboard.svg" alt="Logo" />
        </div>
        <h1 className='text-[#1E252B] text-center text-[24px] leading-[52px] tracking-[0.48px] font-semibold mt-[43px]' >
          Entrar na plataforma
        </h1>
        <form onSubmit={handleSubmitLogin} className="flex flex-col justify-center max-w-[400px] mx-auto w-[100%] mt-[65px]">
          <div >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 pl-[24px] pb-[12px] font-ubuntu">
              E-mail:
            </label>
            <input type="email" id="email" name="email" required
              className="bg-[#F3F5F6] rounded-[8px] w-full h-[60px] pl-[24px] text-[#333333] text-4 font-ubuntu"
            />
          </div>

          <div className="mb-[48px] mt-[50px]">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 pl-[24px] pb-[12px] font-ubuntu">
              Senha:
            </label>
            <input type="password" id="password" name="password" required
              className="bg-[#F3F5F6] rounded-[8px] w-full h-[60px] pl-[24px] text-[#333333] text-4 font-ubuntu"
            />
          </div >

          <button type="submit" className="bg-[#5A4CA7] rounded-lg w-[120px] h-[40px] justify-center mx-auto text-4 text-[#FFF]">
            Entrar
          </button>
          {error === "CredentialsSignin" && (
            <p className="text-red-500 text-center mb-4 mt-4">Credenciais inválidas. Por favor, verifique seu e-mail e senha e tente novamente.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
