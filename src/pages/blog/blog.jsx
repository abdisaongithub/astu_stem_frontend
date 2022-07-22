import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import BlogCard from "./components/blog_card";

const Blog = () => {
    return (
        <Fragment>
            <div className="flex bg-gray-100">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
            <div className="flex bg-gray-100">
                <BlogCard/>
                <BlogCard/>
                <BlogCard/>
            </div>
        </Fragment>
    )
}

export default Blog
