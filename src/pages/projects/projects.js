import React, {useEffect, useState} from "react";
import ProjectsCard from "./components/ProjectsCard";

import api from "../../api";

const Projects = () => {

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    let counter = 0

    useEffect(() => {
        api.get('projects').then((res) => {
            setProjects(res.data)
            setLoading(false)
            console.log(projects)
        }).catch((e)=>{
            console.log(e)
        })
    }, [])

    return <div className="grid grid-cols-3 my-10">
        {loading ?
            'loading' :
            projects.data.map((project) => {
                counter+=3
                return <ProjectsCard project={project} key={project.id}/>
            })
        }
    </div>
}
// TODO: make a detail page for
export default Projects
