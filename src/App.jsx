
import { useState, useEffect } from "react";

import Formulario from "./components/Formulario";
import Lista from "./components/Lista";
import Timer from "./components/Timer";

function App() {

  // Estado principal das tarefas
  const [tarefas, setTarefas] = useState([]);

  // Adicionar tarefa
  function adicionarTarefa(texto) {
    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false
    };

    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      novaTarefa
    ]);
  }

  // Remover tarefa
  function removerTarefa(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== id)
    );
  }

  // Concluir tarefa
  function concluirTarefa(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

  // Contar tarefas pendentes
  const pendentes = tarefas.filter(
    (tarefa) => !tarefa.concluida
  ).length;

  // Atualizar título da aba
  useEffect(() => {
    document.title = `${pendentes} tarefas pendentes`;

  }, [pendentes]);

  return (
    <main className="min-h-screen bg-gray-100 p-6">

      <header className="bg-blue-700 text-white p-6 rounded-xl mb-8 text-center">

        <h1 className="text-3xl font-bold">
          Meu Gerenciador de Tarefas
        </h1>

        <p className="mt-2">
          Organize suas atividades de forma simples!
        </p>

      </header>

      <div className="max-w-3xl mx-auto space-y-6">

        {/* TIMER */}
        <Timer />

        {/* RESUMO */}
        <section className="bg-white p-5 rounded-xl shadow-md text-center">

          <h2 className="text-xl font-bold">
            Resumo das tarefas
          </h2>

          <p className="text-blue-700 text-3xl font-bold mt-2">
            {pendentes}
          </p>

          <p className="text-gray-500">
            Tarefas pendentes
          </p>

        </section>

        {/* FORMULÁRIO */}
        <Formulario adicionarTarefa={adicionarTarefa} />

        {/* LISTA */}
        <Lista
          tarefas={tarefas}
          removerTarefa={removerTarefa}
          concluirTarefa={concluirTarefa}
        />

      </div>

      <footer className="text-center text-gray-500 mt-10">
        Entregável 4 - Desenvolvimento de Interfaces Dinâmicas e Reativas
      </footer>

    </main>
  );
}

export default App;
