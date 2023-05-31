import { BsArrowLeft } from "react-icons/bs"
import { Link, useParams } from 'react-router-dom';
import Forms from "../../components/Forms";
import data from "../../data/data"

export default function Calculo(){
    const { tipo } = useParams()
    const filteredData = data.filter(item => item.to === tipo)

    return(
        <div className="w-full min-h-screen">
        <div className="relative flex flex-col items-center bg-verde pb-10">
            <Link to="/" aria-label="Voltar">
                <BsArrowLeft size={30} aria-hidden="true" className="absolute left-8 top-8 text-white"/>
            </Link>
            <div className="flex flex-col items-center mt-20 mb-10">
                <img src={filteredData[0].imgwhite}></img>
                <h1 className="text-white font-bold text-4xl text-center">{filteredData[0].nome}</h1>
            </div>
        </div>
        <div className="relative bg-white rounded-t-[2.5rem] p-8 -mt-10 z-20">
            <Forms tipo={tipo}/>
        </div>
    </div>
    )
}