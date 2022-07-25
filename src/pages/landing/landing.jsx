import React from "react";
import ProjectCard from "./components/ProjectCard";
import DownloadApp from "./components/DownloadApp";
import TrainingLeft from "../../common/TrainingLeft";
import TrainingRight from "../../common/TrainingRight";
import NewsSection from "./components/NewsSection";

const Landing = () => {
    return (
        <div className="bg-gray-100">
            <div className="stack">
                <div className="w-full pl-5 pr-2 pt-5">
                    {/*<img src="http://localhost/dashboard/images/xampp-logo.svg" alt=""/>*/}
                    <img src="./images/hero.svg" alt=""/>
                </div>
            </div>

            <TrainingLeft />
            <TrainingRight />
            <TrainingLeft />

            <div className="mt-10 mx-10">
                <h1 className="text-[40px] mb-5 ">Ongoing Projects</h1>
                <div className="flex">
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
            <NewsSection />
            <DownloadApp />

            <div className="pb-10"></div>
        </div>
    );
}

export default Landing
