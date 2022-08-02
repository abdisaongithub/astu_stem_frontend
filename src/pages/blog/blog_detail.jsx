import React, {Fragment, useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import api from "../../api";
import baseUrl from "../../constants";

const BlogDetail = () => {
    let { blogId } = useParams();
    const [blog, setBlog] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        api.get(`blog/${blogId}`).then((res)=>{
            setBlog(res.data.data)
            setLoading(false)
        })
    }, [blogId])

    return <Fragment>
        {loading ? 'Loading' : <div className="bg-gray-100">
            <div className="w-full h-[200px] bg-blog_header object-cover bg-no-repeat flex text-white">
                <div className="mx-auto my-auto text-8xl">
                    <h1 className="text-white mb-2">{blog.blog.title}</h1>
                </div>
            </div>
            <div className="mx-32 flex mt-10">
                <div className="flex-col w-1/3 ">
                    <img src={"/images/profile.jpg"} className="h-[160px] w-[160px] object-cover rounded-full" alt=""/>
                    <p className="font-bold text-2xl my-3">Abdisa Tsegaye</p>
                    <p className="font-bold text-lg text-blue-600 my-3 leading-none">Academic and Research Assistant</p>
                    <p className="font-bold text-lg text-blue-600 my-3 leading-none">ASTU, Adama</p>
                    <hr className="border border-black my-5"/>
                    <p className="font-bold text-2xl my-3">Projects</p>
                    <div className="flex-col">
                        {blog.projects.map((project) => {
                            return <div className="flex">
                                <div className="h-8 w-8 bg-blue-600 rounded-full mr-5 my-auto">
                                    <h1 className="text-white text-center justify-center pt-1 m-0 ">{project.id}</h1>
                                </div>
                                <div className="flex-col">
                                <Link to={"/projects/" + project.id}><p className="font-bold block text-lg text-blue-600 my-3 leading-none">{project.title}</p></Link>
                            </div>
                            </div>
                        })}

                    </div>
                </div>

                <div className="flex-col w-2/3 ml-10">
                    <p className="text-semibold text-justify">
                        <img src={baseUrl + blog.blog.image} className="w-full h-[200px] object-cover rounded" alt=""/>
                        <span className="font-bold text-3xl my-10 leading-loose underline">Some Blog Title</span>
                        <br/>
                        {blog.blog.detail}
                    </p>
                </div>
            </div>
        </div>}
    </Fragment>
}

export default BlogDetail
