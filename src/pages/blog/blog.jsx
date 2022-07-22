import React, {Fragment} from "react";
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
