import { createContext, useState, useContext } from "react";

const SemaforoContext = createContext(null);

export const SemaforoProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColor] = useState("red");

  return (
    <SemaforoContext.Provider value={{ color, setColor }}>
      {children}
    </SemaforoContext.Provider>
  );
};

export const useSemaforo = () => useContext(SemaforoContext);
