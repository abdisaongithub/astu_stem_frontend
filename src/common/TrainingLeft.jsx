import React from "react";
import {Link} from "react-router-dom";

const TrainingLeft = ({training, all=false}) => {

    const baseUrl = 'http://localhost:5000'
    return (
        <div className="flex px-10 pt-10">
            <div className="w-1/2 mx-3">
                <img src={baseUrl + training.image} className="floating2 h-[400px]" alt=""/>
            </div>
            <div className="w-1/2">
                <div className="flex-col mx-3">
                    <h1 className='font-bold text-[64px] text-right animate__animated animate__slideInUp '>{training.name}</h1>
                    <p className="text-justify animate__animated animate__slideInUp ">{training.description}</p>
                    { all ? '' : <Link to="/trainings">
                        <button
                            className="animate__animated animate__slideInUp float bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 ml-auto">
                            View All
                        </button>
                    </Link> }

                </div>
            </div>
        </div>
    )
}

export default TrainingLeft
