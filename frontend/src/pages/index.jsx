import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import {useNavigate} from  "react-router"
import { useAuth } from "../context/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { handleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleLogin(email, password);
      alert("Login realizado com sucesso");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Erro ao fazer login");
    }
  };

    return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center bg-blue-100 px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
            alt="Your Company"
            src="src/assets/hotel_icon.svg"
            className="mx-auto h-20 w-20 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                Hotel Booking System
            </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <Input
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <Button text="Submit" className="w-full" />

          </form>
        </div>
      </div>
    </>
  )
}      

