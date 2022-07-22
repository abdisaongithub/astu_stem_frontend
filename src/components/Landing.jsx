import React from "react";
import ProjectCard from "./landing/ProjectCard";
import SampleTrainingLeft from "./landing/SampleTrainingLeft";
import SampleTrainingRight from "./landing/SampleTrainingRight";

const Landing = () => {
    return (
        <div className="bg-gray-100">
            <div className="stack">
                <div className="w-full pl-5 pr-2 pt-5">
                    {/*<img src="http://localhost/dashboard/images/xampp-logo.svg" alt=""/>*/}
                    <img src="./images/hero.svg" alt=""/>
                </div>
            </div>

            <SampleTrainingLeft />
            <SampleTrainingRight />
            <SampleTrainingLeft />

            <div className="mt-10 mx-10">
                <h1 className="text-[40px] mb-5 ">Ongoing Projects</h1>
                <div className="flex">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>

            <div className="mt-10 mx-10">
                <h1 className="text-[40px] mb-5 ">Ongoing Projects</h1>
                <div className="flex">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>

            <div className="pb-[300px]"></div>
        </div>
    );
}

export default Landing
