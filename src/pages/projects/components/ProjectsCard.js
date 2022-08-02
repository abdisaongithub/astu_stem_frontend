import {Link} from "react-router-dom";
import React from "react";

const ProjectCard = () => {
    return (
        <div className="mx-auto bg-gray-100">
            <div className="max-w-sm rounded overflow-hidden shadow-xl pb-5 border ">
                <img className="mx-auto px-2 mt-5" src="/images/hero.svg" alt=""/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                        Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <Link to="/projects">
                    <div className="flex">
                        <button
                            className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 ml-auto">
                            View Detail
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard