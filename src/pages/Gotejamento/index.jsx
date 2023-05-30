import { BsArrowLeft } from "react-icons/bs"
import { Link } from 'react-router-dom';

export default function Gotejamento(){
    return(
        <div className="w-full h-screen bg-verde">
            <div className="relative flex flex-col items-center">
                <Link to="/" aria-label="Voltar">
                    <BsArrowLeft size={30} aria-hidden="true" className="absolute left-8 top-8 text-white"/>
                </Link>
                <div className="flex flex-col items-center mt-20 mb-10">
                    <img src="./gotejamento2.svg"></img>
                    <h1 className="text-white font-bold text-4xl">Gotejamento</h1>
                </div>
            </div>
            <div className="bg-white h-full rounded-t-[2.5rem] p-8">
                <form className="flex flex-col gap-y-6">
                    <div>
                        <label className="font-semibold">Volume do medicamento</label>
                        <div className="flex items-end gap-x-2">
                            <input className="p-2 flex flex-1 border-2 border-gray-300 rounded-md">
                            </input>
                            <span className="font-semibold text-gray-600">Mililitro(ml)</span>
                        </div>
                    </div>
                    <div>
                        <label className="font-semibold">Tempo de aplicação</label>
                        <div className="flex items-end gap-x-2">
                            <input className="p-2 flex flex-1 border-2 border-gray-300 rounded-md"></input>
                            <select className="font-semibold text-gray-600">
                                <option>
                                    Minutos
                                </option>
                                <option>
                                    Horas
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-evenly gap-x-6">
                        <button className="w-full p-1.5 text-white bg-verde border border-verde font-semibold text-lg rounded-md">Calcular</button>
                        <button className="w-full p-1.5 text-verde border border-verde font-semibold text-lg rounded-md">Limpar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}