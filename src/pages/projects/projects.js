
import React from "react";
import ProjectsCard from "./components/ProjectsCard";

const Projects = () => {
    return (
        <div className="mt-10 mx-10 mb-10">
            {/*<h1 className="text-[40px] mb-5 ">Ongoing Projects</h1>*/}
            <div className="flex">
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
            </div>
            <div className="flex mt-10">
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
            </div>
        </div>
    )
}
// TODO: make a detail page for
export default Projects