import React, {Fragment} from "react";
import NewsCardButton from "./components/NewsCardButton";

const News = () => {
    return (
        <Fragment>
            <div className="bg-gray-100 pt-10 px-10">
                <div className="flex ">
                    <NewsCardButton />
                    <NewsCardButton />
                </div>
            </div>
            <div className="bg-gray-100 pt-10 px-10">
                <div className="flex ">
                    <NewsCardButton />
                    <NewsCardButton />
                </div>
            </div>
            <div className="bg-gray-100 pt-10 px-10">
                <div className="flex ">
                    <NewsCardButton />
                    <NewsCardButton />
                </div>
            </div>
            <div className="bg-gray-100 pt-10 px-10">
                <div className="flex ">
                    <NewsCardButton />
                    <NewsCardButton />
                </div>
            </div>
        </Fragment>
    )
}

export default News
