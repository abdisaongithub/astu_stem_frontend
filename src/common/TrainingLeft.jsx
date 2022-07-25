import React from "react";

const TrainingLeft = () => {
    return (
        <div className="flex px-10 pt-10">
            <div className="w-1/2 mx-3">
                <img src="/images/plane.svg" className="floating2" alt=""/>
            </div>
            <div className="w-1/2">
                <div className="flex-col mx-3">
                    <h1 className='font-bold text-[64px] text-right animate__animated animate__slideInUp '>Physics</h1>
                    <p className="text-justify animate__animated animate__slideInUp ">It is a calm sonic shower, sir. It is a calm sonic shower, sir. It
                        is a calm sonic shower, sir. It is a calm sonic shower, sir. It is a calm sonic shower, sir.
                        It is a calm sonic shower, sir. It is a calm sonic shower, sir. It is a calm sonic shower,
                        sir. It is a calm sonic shower, sir. It is a calm sonic shower, sir. It is a calm sonic
                        shower, sir. It is a calm sonic shower, sir. It is a calm sonic shower, sir. It is a calm
                        sonic shower, sir. It is a calm sonic shower, sir. It is a calm sonic shower, sir. It is a
                        calm sonic shower, sir. It is a calm sonic shower, sir. It is a calm sonic shower, sir. It
                        is a calm sonic shower, sir. </p>
                    <button
                        className="animate__animated animate__slideInUp float bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 ml-auto">
                        View All
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TrainingLeft
