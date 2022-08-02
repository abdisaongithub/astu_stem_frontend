import React, {Fragment} from "react";
import NewsCard from "../../../common/NewsCard";
import baseUrl from "../../../constants";

const NewsSection = ({news}) => {
    return (<Fragment>
        <div className="mt-10 pt-10 mx-10">
            <h1 className="text-[40px] mb-5 ">Latest News</h1>
            <div className="flex mx-auto">
                <Fragment>
                    <a href="/news"
                       className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto">
                        <img
                            className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={baseUrl + news[0].image} alt=""/>
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{news[0].title}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{news[0].text}</p>
                        </div>
                    </a>
                </Fragment>
                <div className="flex mx-auto">
                    <Fragment>
                        <a href="/news"
                           className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-auto">
                            <img
                                className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={baseUrl + news[1].image} alt=""/>
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{news[0].title}</h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{news[0].text}</p>
                            </div>
                        </a>
                    </Fragment>
                </div>
            </div>
        </div>
    </Fragment>)
}


export default NewsSection