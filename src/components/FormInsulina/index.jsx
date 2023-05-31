import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormInsulina() {
  const [dataCalc, setdataCalc] = useState({
    prescrito: "",
    disponivel: "",
    volconcentracao: "",
    concentracaoseringa: "",
  });
  const [vol, setVol] = useState(1);
  const [resultado, setResultado] = useState("");

  const handleChage = (e) => {
    e.preventDefault();
    setdataCalc((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (e) => {
    e.target.value === "mililitro" ? setVol(1) :
    setVol(1000)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
        for (let value of Object.keys(dataCalc)){
            if(dataCalc[value] <= 0){
                throw new Error("Valor inválido")
            }
        }
    } catch (error) {
        toast.error("Informe números positivos e maiores que 0!",
              {
                position: toast.POSITION.TOP_CENTER,
        });
        return
    }
 
    setResultado(calculo(dataCalc))
  };

  const resetForm = () => {
    setdataCalc({
      prescrito: "",
      disponivel: "",
      volconcentracao: "",
      concentracaoseringa: "",
    });
    setResultado("")
  };

  function calculo(dataCalc) {
   const result = (dataCalc.prescrito * dataCalc.volconcentracao / dataCalc.disponivel) * (dataCalc.concentracaoseringa * vol)

    return result.toFixed(3).replace(".", ",");
  }


  return (
    <>
      <ToastContainer />
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
          <div>
            <label className="font-semibold">Prescrição médica</label>
            <div className="flex items-end gap-x-2">
              <input
                type="number"
                name="prescrito"
                value={dataCalc.prescrito}
                required
                onChange={(e) => handleChage(e)}
                className="p-2 flex w-[60%] border-2 border-gray-300 rounded-md"
              />
              <span className="font-semibold text-gray-600 flex flex-1 justify-start">Ul</span>
            </div>
          </div>
          <div>
            <label className="font-semibold">Concentração disponível</label>
            <div className="flex items-end gap-x-2">
              <input
                type="number"
                name="disponivel"
                value={dataCalc.disponivel}
                required
                onChange={(e) => handleChage(e)}
                className="p-2 flex w-[60%] border-2 border-gray-300 rounded-md"
              />
              <span className="font-semibold text-gray-600 flex flex-1 justify-start">Ul / ml</span>
            </div>
          </div>
          <div>
            <label className="font-semibold">Volume da concentração</label>
            <div className="flex items-end gap-x-2">
              <input
                type="number"
                name="volconcentracao"
                value={dataCalc.volconcentracao}
                required
                onChange={(e) => handleChage(e)}
                className="p-2 flex w-[60%] border-2 border-gray-300 rounded-md"
              />
              <select
                onChange={(e) => handleSelect(e)}
                className="font-semibold text-gray-600 flex flex-1 justify-start"
              >
                <option value="mililitro">Mililitro(ml)</option>
                <option value="litro">Litros</option>
              </select>
            </div>
          </div>
          <div>
            <label className="font-semibold">Concentração da seringa</label>
            <div className="flex items-end gap-x-2">
              <input
                type="number"
                name="concentracaoseringa"
                value={dataCalc.concentracaoseringa}
                required
                onChange={(e) => handleChage(e)}
                className="p-2 flex w-[60%] border-2 border-gray-300 rounded-md"
              />
              <span className="font-semibold text-gray-600 flex flex-1 justify-start">Ul / ml</span>
            </div>
          </div>

          <div className="flex justify-evenly gap-x-6">
            <button
              type="submit"
              className="w-full p-1.5 text-white bg-verde border border-verde font-semibold text-lg rounded-md shadow-md shadow-verde/50"
            >
              Calcular
            </button>
            <button
              type="button"
              onClick={() => resetForm()}
              formNoValidate
              className="w-full p-1.5 text-verde border border-verde font-semibold text-lg rounded-md shadow-md "
            >
              Limpar
            </button>
          </div>
        </form>
        {resultado && (
          <div className="flex flex-col items-center bg-verde p-2 text-white font-semibold text-xl rounded-md mt-8">
            <span className="flex flex-wrap text-center">Aspire {resultado} ml de medicamento</span>
          </div>
        )}
      </div>
    </>
  );
}
