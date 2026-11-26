
function Formulario({ adicionarTarefa }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const texto = e.target.tarefa.value.trim();

        if (texto === "") {
          return;
        }

        adicionarTarefa(texto);

        e.target.reset();
      }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">
        Adicionar nova tarefa
      </h2>

      <input
        type="text"
        name="tarefa"
        placeholder="Digite uma tarefa..."
        className="w-full border border-gray-300 rounded-lg p-3 mb-4"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
      >
        Adicionar tarefa
      </button>
    </form>
  );
}

export default Formulario;
