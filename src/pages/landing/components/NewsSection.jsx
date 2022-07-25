import React, {Fragment} from "react";
import NewsCard from "../../../common/NewsCard";

const NewsSection = () => {
    return (<Fragment>
        <div className="mt-10 pt-10 mx-10">
            <h1 className="text-[40px] mb-5 ">Latest News</h1>
            <div className="flex mx-auto">
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    </Fragment>)
}



export default NewsSection