import Error from "../../assets/404.svg"
import { Link } from "react-router-dom"

export default function NotFound(){
    return(
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-6">
            <img src={Error}/>
            <h1 className="text-center font-bold text-3xl text-gray-800">Opps, a página que você procura não existe!</h1>
            <Link to="/" className="p-2 px-20 bg-verde rounded-md">
                <span className="text-white font-semibold text-xl">Voltar</span>
            </Link>
        </div>
    )
}