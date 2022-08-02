import React, {Fragment, useEffect, useState} from "react";
import BlogCard from "./components/blog_card";

import api from "../../api";

const Blog = () => {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get('blog').then((response) => {
            setBlogs(response.data.data)
            setLoading(false)
            console.log(response.data.data)
        })
    }, [])

    return (
        <div className="grid grid-cols-3">
            {
                loading ?
                    'Loading' :
                   blogs.map((blog)=>{
                       return <BlogCard blog={blog} key={blog.id} />
                   })
            }
        </div>
    )
}

export default Blog
