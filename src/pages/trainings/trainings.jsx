import React, {useEffect, useState} from "react";
import TrainingLeft from "../../common/TrainingLeft";
import TrainingRight from "../../common/TrainingRight";
import api from "../../api";

const Trainings = () => {
    let count = 0
    const [trainings, setTrainings] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        api.get('trainings').then((response) => {
            setTrainings(response.data.data)
            setLoading(false)
            console.log(trainings)
        })
    })

    return (
        <div className="bg-gray-100">
            {
                loading === true ?
                    'Loading' :
                    trainings.map((training) => {
                        if (count % 2 === 0){
                            count++
                            return <TrainingLeft training={training} all={true} />
                        } else {
                            count++
                            return <TrainingRight training={training} all={true}/>
                        }
                    })
            }
        </div>
    )
}

export default Trainings