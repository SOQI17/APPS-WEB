import { useSemaforo } from "../context/SemaforoContext";

const BotonesSemaforo = () => {
  const { setColor } = useSemaforo();

  return (
    <>
      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => setColor("red")}
        >
          Luz Roja
        </button>
        <button
          className="bg-yellow-400 text-white px-4 py-2 rounded"
          onClick={() => setColor("yellow")}
        >
          Luz Amarilla
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setColor("green")}
        >
          Luz Verde
        </button>
      </div>
    </>
  );
};

export default BotonesSemaforo;
