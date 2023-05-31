import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function FormGotejamento(){
    const [dataCalc, setdataCalc] = useState({
        quantidade: "",
        tempo: "",
    })
    const [tipoTempo, setTipoTempo] = useState("minutos")
    const [micro, setMicro] = useState("")
    const [macro, setMacro] = useState("")

    const handleChage = (e) => {
       e.preventDefault()
       setdataCalc((prevData) => ({...prevData, [e.target.name]: e.target.value}))
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

        setMicro(calculoMicro(dataCalc))
        setMacro(calculoMacro(dataCalc))
    }
    
    const resetForm = () => {
        setdataCalc({
            quantidade: "",
            tempo: "",
        })
        setMacro("")
        setMicro("")
    }

    function calculoMicro(dataCalc){
        if (tipoTempo === "minutos"){
            const result = Number(dataCalc.quantidade) / (Number(dataCalc.tempo) / 60)
            return result.toFixed(3).replace('.', ',')
        }

        const result = Number(dataCalc.quantidade) / Number(dataCalc.tempo)
        return result.toFixed(3).replace('.', ',')
    }

    function calculoMacro(){
        if (tipoTempo === "minutos"){
            const result = Number(dataCalc.quantidade) / ((Number(dataCalc.tempo) / 60) * 3)
            return result.toFixed(3).replace('.', ',')
        }

        const result = Number(dataCalc.quantidade) / (Number(dataCalc.tempo) * 3)
        
        return result.toFixed(3).replace('.', ',')
    }


    return(
        <>
            <ToastContainer/>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
                    <div>
                        <label className="font-semibold">Volume do medicamento</label>
                        <div className="flex items-end gap-x-2">
                            <input 
                            type="number"
                            name="quantidade"
                            value={dataCalc.quantidade}
                            required
                            onChange={(e) => handleChage(e)}
                            className="p-2 flex flex-1 border-2 border-gray-300 rounded-md">
                            </input>
                            <span className="font-semibold text-gray-600">Mililitro(ml)</span>
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold">Tempo de aplicação</label>
                        <div className="flex items-end gap-x-2">
                            <input 
                            type="number"
                            name="tempo"
                            value={dataCalc.tempo}
                            required
                            onChange={(e) => handleChage(e)}
                            className="p-2 flex flex-1 border-2 border-gray-300 rounded-md"></input>
                            <select onChange={(e) => setTipoTempo(e.target.value)} className="font-semibold text-gray-600">
                                <option value="minutos">
                                    Minutos
                                </option>
                                <option value="horas">
                                    Horas
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-evenly gap-x-6">
                        <button type="submit" className="w-full p-1.5 text-white bg-verde border border-verde font-semibold text-lg rounded-md shadow-md shadow-verde/50">Calcular</button>
                        <button type="button" onClick={() => resetForm()} formNoValidate className="w-full p-1.5 text-verde border border-verde font-semibold text-lg rounded-md shadow-md ">Limpar</button>
                    </div>
                </form>
                    {macro && micro && (
                        
                        <div className="flex flex-col gap-y-3 mt-8">
                            <div className="flex flex-col items-center bg-verde p-2 text-white font-semibold text-xl rounded-md">
                                <span>{micro}</span>
                                <span>Microgotas por minuto</span>
                            </div>
                            <div className="flex flex-col items-center bg-verde p-2 text-white font-semibold text-xl rounded-md">
                                <span>{macro}</span>
                                <span>Macrogotas por minuto</span>
                            </div>
                        </div>
                    )}
            </div>
        </>
    )
}