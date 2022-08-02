import React, {useEffect, useState} from "react";
import ProjectCard from "./components/ProjectCard";
import DownloadApp from "./components/DownloadApp";
import TrainingLeft from "../../common/TrainingLeft";
import TrainingRight from "../../common/TrainingRight";
import NewsSection from "./components/NewsSection";

import api from "../../api";

const Landing = () => {

    const [landing, setLanding] = useState({})
    const [loading, setLoading] = useState(true)

    let num = 0
    let pro = 0

    useEffect(() => {
        api.get('landing').then(async (res) => {
            await setLanding(res.data.data)
            console.log(res.data.data)
            await setLoading(false)
        })
    }, [])

    return (
        <div className="bg-gray-100">
            <div className="stack">
                <div className="w-full pl-5 pr-2 pt-5">
                    {/*<img src="http://localhost/dashboard/images/xampp-logo.svg" alt=""/>*/}
                    <img src="./images/hero.svg" alt=""/>
                </div>
            </div>

            {/*{landing}*/}

            {loading === true ?
                'Loading' :
                landing.trainings.map(
                    training => {
                        if (num < 3) {
                            if (num % 2 === 0) {
                                num += 1
                                return <TrainingLeft training={training} all={false}/>
                            } else {
                                num += 1
                                return <TrainingRight training={training} all={false}/>
                            }
                        }
                    }
                )
            }

            <div className="mt-10 mx-10">
                <h1 className="text-[40px] mb-5 ">Projects</h1>
                <div className="flex">
                    {loading === true ?
                        'Loading' :
                        landing.projects.map(
                            project => {
                                if (pro < 3) {
                                    pro += 1
                                    return <ProjectCard project={project} />
                                }
                            }
                        )
                    }
                </div>
            </div>

            {loading === true ?
                'Loading' :
                <NewsSection news={landing.news}/>
            }



            <DownloadApp/>

            <div className="pb-10"/>
        </div>
    );
}

export default Landing
