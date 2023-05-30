import Blob from "../../assets/Vector.svg"
import { Link } from 'react-router-dom';
import data from '../../data/data.js'


export default function Home(){
    return(
        <div className="flex flex-col justify-center items-center">
        <header className="w-full bg-verde p-4 mb-8 ">
            <h1 className="text-gray-100 font-bold text-3xl">CalcNurse</h1>
        </header>
        <main className="w-full flex flex-col items-center justify-center gap-y-4 mb-10 md:grid md:justify-items-center md:grid-cols-2 lg:grid-cols-3">
            {data.map((item =>{
                return(
                    <Link to={item.to} className="w-11/12 h-40 p-4 flex flex-row items-center  bg-verde rounded-xl shadow-2xl">
                        <div className="relative flex items-center justify-center w-2/5">
                            <img src={Blob} className="h-36 w-36"/>   
                            <img src={item.img} className="text-verde absolute h-20 w-20"/>
                        </div>
                        <span className=" text-gray-100 font-bold text-2xl text-center w-3/5">{item.nome}</span>
                    </Link>
                )
            }))}

        </main>
        </div>
    )
}