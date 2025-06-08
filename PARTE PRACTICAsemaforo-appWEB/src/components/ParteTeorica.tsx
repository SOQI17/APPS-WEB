const ParteTeorica = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-2">Parte Teórica</h1>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>useState:</strong> Hook para manejar el estado local. Ejemplo:
            <code>const [valor, setValor] = useState(0)</code>
          </li>
          <li>
            <strong>Fragmentos:</strong> Agrupan elementos sin añadir nodos extras.
          </li>
          <li>
            <strong>useState vs useContext:</strong> El primero es local, el segundo permite compartir estado globalmente.
          </li>
          <li>
            <strong>Componente funcional:</strong> Función que retorna JSX.
          </li>
        </ol>
      </div>
    </>
  );
};

export default ParteTeorica;
