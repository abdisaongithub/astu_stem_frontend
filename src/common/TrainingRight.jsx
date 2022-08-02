import React from "react";
import {Link} from "react-router-dom";

const TrainingRight = ({training}) => {
    const baseUrl = 'http://localhost:5000'
    return (
        <div className="flex px-10 mt-20">
            <div className="w-1/2">
                <div className="flex-col mx-3">
                    <h1 className='font-bold text-[64px] text-left'>{training.name}</h1>
                    <p className="text-justify">{training.description}</p>
                    <Link to="/trainings">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 ml-auto">
                            View All
                        </button>
                    </Link>
                </div>
            </div>
            <div className="w-1/2 mx-3">
                <img src={baseUrl + training.image} className="floating h-[400px]" alt=""/>
            </div>
        </div>
    )
}

export default TrainingRight
