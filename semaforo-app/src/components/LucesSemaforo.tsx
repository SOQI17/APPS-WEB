import { useSemaforo } from "../context/SemaforoContext";

const LucesSemaforo = () => {
  const { color } = useSemaforo();

  const colores = ["red", "yellow", "green"];

  return (
    <>
      <div className="flex flex-col items-center gap-4 mt-10">
        {colores.map((c) => (
          <div
            key={c}
            className={\`w-24 h-24 rounded-full \${c === "red" ? "bg-red-500" : c === "yellow" ? "bg-yellow-400" : "bg-green-500"} \${color === c ? "opacity-100" : "opacity-30"}\`}
          ></div>
        ))}
      </div>
    </>
  );
};

export default LucesSemaforo;
