import {Link} from "react-router-dom";
import React from "react";

import baseUrl from "../../../constants";

const ProjectCard = ({project}) => {
    return (
        <div className="mx-auto bg-gray-100">
            <div className="max-w-sm rounded overflow-hidden shadow-xl pb-5 border ">
                <img className="mx-auto px-2 mt-5" src={baseUrl + project.image} alt=""/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{project.title}</div>
                    <p className="text-gray-700 text-base">{project.text}</p>
                </div>
                <Link to="/projects">
                    <div className="flex">
                        <button
                            className="mx-auto bg-blue-500 hover:bg-blue-700 text-white
                            font-bold py-2 px-4 rounded-full mt-5 ml-auto">
                            View All
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProjectCard