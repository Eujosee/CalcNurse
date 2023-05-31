import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function FormRegra (){
    const [dataCalc, setdataCalc] = useState({
        valor1: "",
        valor2: "",
        valor3: "",
    })
    const [result, setResult] = useState("X")
    const [isInversa, setIsInversa] = useState(false)

    const handleChage = (e) => {
       e.preventDefault()
       setdataCalc((prevData) => ({...prevData, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (Number(dataCalc.valor1) === 0 || Number(dataCalc.valor2) === 0 || Number(dataCalc.valor3) === 0){
            toast.error("Informe números diferentes 0!"),{
                position: toast.POSITION.TOP_CENTER
            }
            return
        }
        setResult(Calcular(dataCalc))
    }
    
    const resetForm = () => {
        setdataCalc({
            valor1: "",
            valor2: "",
            valor3: "",
        })
        setResult("X")
    }

    function Calcular(dataCalc){
        if (isInversa === true){
            const result = (Number(dataCalc.valor2) * Number(dataCalc.valor1)) / Number(dataCalc.valor3)
            return result.toFixed(3).replace('.', ',')
        }
        const result = (Number(dataCalc.valor2) * Number(dataCalc.valor3)) / Number(dataCalc.valor1)
        return result.toFixed(3).replace('.', ',')
    }

    return(
        <>
            <ToastContainer/>
            <div>
                <form onSubmit={handleSubmit} className="relative grid grid-cols-3 gap-y-2 gap-x-2 items-center">
                    <div>
                        <label className="font-semibold"></label>
                            <input 
                            type="number"
                            name="valor1"
                            value={dataCalc.valor1}
                            required
                            onChange={(e) => handleChage(e)}
                            className="p-2 w-full border-2 border-gray-300 rounded-md"/>
                        
                    </div>
                    <span className="text-center bg-verde text-white rounded-md text-lg font-medium p-1">Está para</span>
                    <div>
                        <label className="font-semibold"></label>
                            <input 
                            type="number"
                            name="valor2"
                            value={dataCalc.valor2}
                            required
                            onChange={(e) => handleChage(e)}
                            className="p-2 w-full border-2 border-gray-300 rounded-md"/>
                    </div>
                    <span className="col-span-3 text-center text-gray-900 text-lg font-medium">Assim como</span>
                    <div>
                        <label className="font-semibold"></label>
                            <input 
                            type="number"
                            name="valor3"
                            value={dataCalc.valor3}
                            required
                            onChange={(e) => handleChage(e)}
                            className="p-2  w-full border-2 border-gray-300 rounded-md"/>
                    </div>
                    <span className="text-center bg-verde text-white rounded-md text-lg font-medium p-1">Está para</span>
                    <div>
                        <label className="font-semibold"></label>
                            <span className="p-2  w-full flex justify-center border-2 border-gray-300 rounded-md bg-verde text-white font-medium overflow-auto">
                                {result}
                            </span>
                    </div>
                    <div className="col-span-3 mb-4 mt-4">
                        <input
                        id="inverso"
                        type="checkbox"
                        className="ml-1 accent-verde scale-150"
                        onChange={() => setIsInversa(!isInversa)}
                        />
                        <label htmlFor="inverso" className="ml-2 font-medium">Inversamente proporcional</label>
                    </div>
                    <div className="col-span-3 flex flex-row gap-x-4">
                        <button type="submit" className="w-full p-1.5 text-white bg-verde border border-verde font-semibold text-lg rounded-md shadow-md shadow-verde/50">Calcular</button>
                        <button type="button" onClick={() => resetForm()} formNoValidate className="w-full p-1.5 text-verde border border-verde font-semibold text-lg rounded-md shadow-md ">Limpar</button>
                    </div>
                </form>
            </div>
        </>
    )
}