import React from "react";
import {Link} from "react-router-dom";

// TODO: smooth out footer svg

const Footer = () => {
    return (
        <footer className="w-full h-[300px] bg-footer
                           bg-gray-100
                           flex text-white text-2xl pt-[120px]">
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
                        <i className="fab fa-facebook"/>
                        <i className="fab fa-telegram"/>
                        <i className="fab fa-youtube"/>
                    {/* TODO:   Make those links circular and clickable*/}
                    </div>
                </div>

        </footer>
    )
}

export default Footer
