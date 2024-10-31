import React, { useEffect, useState } from "react";
import Style from "../Styles/AlunosCadastrados.module.css";
import Alunos from "./AlunosComponent";
import NavBar from "../navBar/NavBar";

function AlunosCadastrados() {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    
    fetch("http://127.0.0.1:5000/list")
      .then((response) => response.json())
      .then((data) => {
        
        const alunosFormatados = Object.keys(data).map((nome) => ({
          nome: nome,
          ra: data[nome],
        }));
        setAlunos(alunosFormatados);
      })
      .catch((error) => console.error("Erro ao buscar alunos:", error));
  }, []);

  return (
    <section className="sec-principal">
      <div className={Style.mainContainer}>
        <NavBar />
        <section className={Style.container}>
          <div className={Style.divTitle}>
            <h1>Lista de Alunos Cadastrados</h1>
          </div>
          <div className={Style.title}>
            <h3>Nome</h3>
            <div className={Style.title2}>
              <h3>ID</h3>
              <h3>Turma</h3>
            </div>
          </div>
          <div className={Style.alunosSection}>
            {alunos.map((aluno, index) => (
              <Alunos
                key={index}
                nome={aluno.nome}
                ra={aluno.ra}
                turma="Equipe 1"
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

export default AlunosCadastrados;
