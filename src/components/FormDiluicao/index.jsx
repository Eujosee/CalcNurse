import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function FormDilucao(){
    const [dataCalc, setdataCalc] = useState({
        prescricao: "",
        voldisponivel: "",
        condisponivel: "",
    })
    const [unidades, setUnidades] = useState({
        prescricao: 1,
        condisponivel: 1,
    })
    const [resultado, setResultado] = useState("")

    const handleChage = (e) => {
       e.preventDefault()
       setdataCalc((prevData) => ({...prevData, [e.target.name]: e.target.value}))
    }

    const handleSelect = (e) => {
        e.preventDefault()
        let value = 1
        e.target.value === "miligrama" ? value = 1 : value = 1000
        setUnidades((prevData) => ({...prevData, [e.target.name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
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

        setResultado(calculo(dataCalc, unidades))
    }
    
    const resetForm = () => {
        setdataCalc({
            quantidade: "",
            tempo: "",
        })
        setResultado("")
    }

    function calculo(dataCalc, unidades){

        const result = (dataCalc.prescricao * unidades.prescricao) * dataCalc.voldisponivel / (dataCalc.condisponivel * unidades.condisponivel)
        return result.toFixed(3).replace('.', ',')
    }

    return(
        <>
            <ToastContainer/>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                    <div>
                        <label className="font-semibold">Prescricação médica</label>
                        <div className="flex items-end gap-x-2">
                            <input 
                            type="number"
                            name="prescricao"
                            value={dataCalc.prescricao}
                            required
                            onChange={(e) => handleChage(e)}
                            className="p-2 flex w-1/2 border-2 border-gray-300 rounded-md"></input>
                            <select name="prescricao" onChange={(e) => handleSelect(e)} className="font-semibold text-gray-600">
                                <option value="miligrama">
                                    Miligramas (mg)
                                </option>
                                <option value="grama">
                                    Gramas
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold">Volume disponível</label>
                        <div className="flex items-end gap-x-2">
                            <input 
                            type="number"
                            name="voldisponivel"
                            value={dataCalc.voldisponivel}
                            required
                            onChange={(e) => handleChage(e)}
                            className="p-2 flex w-1/2 border-2 border-gray-300 rounded-md">
                            </input>
                            <span className="font-semibold text-gray-600">Mililitro(ml)</span>
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold">Concentração disponível</label>
                        <div className="flex items-end gap-x-2">
                            <input 
                            type="number"
                            name="condisponivel"
                            value={dataCalc.condisponivel}
                            required
                            onChange={(e) => handleChage(e)}
                            className="p-2 flex w-1/2 border-2 border-gray-300 rounded-md"></input>
                            <select name="condisponivel" onChange={(e) => handleSelect(e)} className="font-semibold text-gray-600">
                                <option value="miligrama">
                                    Miligramas (mg)
                                </option>
                                <option value="grama">
                                    Gramas
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-evenly gap-x-6">
                        <button type="submit" className="w-full p-1.5 text-white bg-verde border border-verde font-semibold text-lg rounded-md shadow-md shadow-verde/50">Calcular</button>
                        <button type="button" onClick={() => resetForm()} formNoValidate className="w-full p-1.5 text-verde border border-verde font-semibold text-lg rounded-md shadow-md ">Limpar</button>
                    </div>
                
                </form>
                    {resultado && (
                            <div className="flex flex-col items-center text-center bg-verde p-2 text-white font-semibold text-xl rounded-md mt-8">
                                <span>Administre {resultado} ml de medicamento</span>
                            </div>
                    )}
            </div>
        </>
    )
}