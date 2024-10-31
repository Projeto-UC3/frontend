import React, { useState } from "react";
import Style from "../Styles/AlunosCadastrados.module.css";
import NavBar from "../navBar/NavBar";

function Validar() {
  const [accessMessage, setAccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAccess = async () => {
    setAccessMessage("Aguardando leitura do cartão...");
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      // Use a mensagem retornada pela API
      setAccessMessage(response.ok ? data.message : data.error);
    } catch (error) {
      setAccessMessage(`Erro: Acesso negado`);
      console.error("Erro na requisição:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => setAccessMessage(""), 2500);
    }
  };

  return (
    <section className="sec-principal">
      <div className={Style.mainContainer}>
        <NavBar />
        <section className={Style.container}>
          <div className={Style.divTitle}>
            <h1>Verificação de Acesso</h1>
          </div>
          <div className={Style.accessContainer}>
            {accessMessage && (
              <div className={Style.accessMessage}>
                <p>{accessMessage}</p>
              </div>
            )}
            <button
              onClick={handleAccess}
              disabled={isLoading}
              className={Style.buttonValidarStudent}
            >
              {isLoading ? "Verificando..." : "Validar Acesso"}
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Validar;
