
import { useState, useEffect } from "react";

function Timer() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((tempoAtual) => tempoAtual + 1);
    }, 1000);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = segundos % 60;

  return (
    <div className="bg-blue-100 p-4 rounded-xl text-center">

      <h2 className="text-lg font-bold text-blue-800">
        Tempo de sessão
      </h2>

      <p className="text-3xl font-bold text-blue-700 mt-2">
        {String(minutos).padStart(2, "0")}:
        {String(segundosRestantes).padStart(2, "0")}
      </p>

      <p className="text-sm text-blue-600 mt-2">
        Tempo em que a página está aberta
      </p>

    </div>
  );
}

export default Timer;
