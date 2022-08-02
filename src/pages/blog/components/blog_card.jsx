import {Link} from "react-router-dom";
import React from "react";

import baseUrl from "../../../constants";

const BlogCard = ({blog, key}) => {
    return (
        <div className="mx-auto mt-10" key={key}>
            <div className="max-w-sm rounded overflow-hidden shadow-xl pb-5 border">
                <img className="mx-auto " src={baseUrl + blog.image} alt=""/>
                <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">{blog.title}</div>
                    <p className="text-gray-700 text-base">{blog.title}</p>
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