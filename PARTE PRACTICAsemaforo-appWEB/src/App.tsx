import { SemaforoProvider } from "./context/SemaforoContext";
import LucesSemaforo from "./components/LucesSemaforo";
import BotonesSemaforo from "./components/BotonesSemaforo";
import ParteTeorica from "./components/ParteTeorica";

const App = () => {
  return (
    <SemaforoProvider>
      <>
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold">Simulador de Semáforo</h1>
          <LucesSemaforo />
          <BotonesSemaforo />
        </div>
        <ParteTeorica />
      </>
    </SemaforoProvider>
  );
};

export default App;
