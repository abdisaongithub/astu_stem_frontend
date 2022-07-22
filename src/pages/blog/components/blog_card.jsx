import {Link} from "react-router-dom";
import React from "react";

const BlogCard = () => {
    return (
        <div className="mx-auto mt-10">
            <div className="max-w-sm rounded overflow-hidden shadow-xl pb-5 border">
                <img className="mx-auto mt-5" src="/images/hero.svg" alt=""/>
                <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                        Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="flex">
                    <p className="flex my-auto ml-5 text-gray-500">Sep 11 2001</p>
                    <Link to="/blog/3" className="ml-auto my-auto">
                        <button
                            className="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCard