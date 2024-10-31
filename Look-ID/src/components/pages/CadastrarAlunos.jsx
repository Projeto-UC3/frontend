import React, { useState } from "react";
import Style from "../Styles/AlunosCadastrados.module.css";
import Alunos from "./AlunosComponent";
import NavBar from "../navBar/NavBar";

function AlunosCadastrados() {
  const [name, setName] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!name) {
      alert("Por favor, insira o nome do aluno.");
      return;
    }

    setIsLoading(true);
    setRegisterMessage("Aguardando leitura do cartão...");

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      setRegisterMessage(response.ok ? data.message : data.error);

      if (response.ok) {
        setTimeout(() => {
          setRegisterMessage("");
        }, 2000);
      }
    } catch (error) {
      setRegisterMessage("Erro ao cadastrar aluno.");
      console.error("Erro na requisição:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="sec-principal">
      <div className={Style.mainContainer}>
        <NavBar />
        <section className={Style.container}>
          <div className={Style.divTitle}>
            <h1>Cadastrar Alunos</h1>
          </div>
          <div className={Style.registerContainer}>
            <form onSubmit={handleRegister} className={Style.form}>
              <input
                type="text"
                id="student-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome do Aluno"
                className={Style.input}
              />
              <button
                type="submit"
                id="register-btn"
                disabled={isLoading}
                className={Style.button}
              >
                {isLoading ? "Registrando..." : "Registrar"}
              </button>
            </form>
            {registerMessage && (
              <div className={Style.registerMessage}>
                <p>{registerMessage}</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

export default AlunosCadastrados;
