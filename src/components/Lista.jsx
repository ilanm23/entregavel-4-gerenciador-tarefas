
function Lista({ tarefas, removerTarefa, concluirTarefa }) {
  return (
    <section className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-xl font-bold mb-4">
        Minhas Tarefas
      </h2>

      {tarefas.length === 0 ? (
        <p className="text-gray-500">
          Nenhuma tarefa cadastrada.
        </p>
      ) : (
        <div className="space-y-3">

          {tarefas.map((tarefa) => (
            <div
              key={tarefa.id}
              className="flex justify-between items-center border-b pb-3"
            >

              <div className="flex items-center gap-3">

                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => concluirTarefa(tarefa.id)}
                  className="w-5 h-5"
                />

                <span
                  className={
                    tarefa.concluida
                      ? "line-through text-gray-400"
                      : "text-gray-800"
                  }
                >
                  {tarefa.texto}
                </span>

              </div>

              <button
                onClick={() => removerTarefa(tarefa.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
              >
                Excluir
              </button>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}

export default Lista;
