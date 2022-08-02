import React from "react";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className="w-full h-[300px] bg-footer
                           bg-gray-100
                           flex text-white text-2xl pt-[100px]">
                <div className="mx-auto">
                    <h1 className="text-white mb-2">Useful Links</h1>
                    <Link to="/trainings" className="text-sm block">&bull; Trainings</Link>
                    <Link to="/projects" className="text-sm block">&bull; Projects</Link>
                    <Link to="/about" className="text-sm block">&bull; About</Link>
                    <Link to="/blog" className="text-sm block">&bull; Blog</Link>
                    <Link to="/news" className="text-sm block">&bull; News</Link>
                </div>
                <div className="mx-auto">
                    <h1 className="text-white mb-2 block">Services</h1>
                    <Link to="/" className="text-sm block">&bull; Trainings</Link>
                    <Link to="/" className="text-sm block">&bull; Projects</Link>
                    <Link to="/" className="text-sm block">&bull; Album</Link>
                    <Link to="/" className="text-sm block">&bull; About</Link>
                    <Link to="/" className="text-sm block">&bull; Blog</Link>
                    <Link to="/" className="text-sm block">&bull; News</Link>
                </div>
                <div className="mx-auto">
                    <h1 className="text-white mb-2 block">Major Trainings</h1>
                    <Link to="/" className="text-sm block">&bull; Trainings</Link>
                    <Link to="/" className="text-sm block">&bull; Projects</Link>
                    <Link to="/" className="text-sm block">&bull; Album</Link>
                    <Link to="/" className="text-sm block">&bull; About</Link>
                    <Link to="/" className="text-sm block">&bull; Blog</Link>
                    <Link to="/" className="text-sm block">&bull; News</Link>
                </div>
                <div className="mx-auto">
                    <h1 className="text-white mb-2 block">Contact Us</h1>
                    <Link to="/" className="text-sm block">&bull; Trainings</Link>
                    <Link to="/" className="text-sm block">&bull; Projects</Link>
                    <Link to="/" className="text-sm block">&bull; Album</Link>
                    <Link to="/" className="text-sm block">&bull; About</Link>
                    <Link to="/" className="text-sm block">&bull; Blog</Link>
                    <Link to="/" className="text-sm block">&bull; News</Link>
                    <div className="flex-row">
                        <Link to="/" target="_blank"><i className="fab fa-facebook mx-2"/></Link>
                        <Link to="/" target="_blank"><i className="fab fa-telegram mx-2"/></Link>
                        <Link to="/" target="_blank"><i className="fab fa-youtube mx-2"/></Link>
                    </div>
                </div>

        </footer>
    )
}

export default Footer
