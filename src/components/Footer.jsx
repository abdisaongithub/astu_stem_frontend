import React from "react";
import {Link} from "react-router-dom";

// TODO: smooth out footer svg

const Footer = () => {
    return (
        <footer className="w-full h-[400px] bg-footer
                           bg-gray-100 border-t-2 border-white
                           flex text-white text-2xl pt-[200px]">
                <div className="mx-auto">
                    <h1 className="text-white mb-2">Useful Links</h1>
                    <Link to="/" className="text-sm block">&bull; Trainings</Link>
                    <Link to="/" className="text-sm block">&bull; Projects</Link>
                    <Link to="/" className="text-sm block">&bull; Album</Link>
                    <Link to="/" className="text-sm block">&bull; About</Link>
                    <Link to="/" className="text-sm block">&bull; Blog</Link>
                    <Link to="/" className="text-sm block">&bull; News</Link>
                </div>
                <div className="mx-auto">
                    <h1 className="text-white mb-2 block">Useful Links</h1>
                    <Link to="/" className="text-sm block">&bull; Trainings</Link>
                    <Link to="/" className="text-sm block">&bull; Projects</Link>
                    <Link to="/" className="text-sm block">&bull; Album</Link>
                    <Link to="/" className="text-sm block">&bull; About</Link>
                    <Link to="/" className="text-sm block">&bull; Blog</Link>
                    <Link to="/" className="text-sm block">&bull; News</Link>
                </div>
                <div className="mx-auto">
                    <h1 className="text-white mb-2 block">Useful Links</h1>
                    <Link to="/" className="text-sm block">&bull; Trainings</Link>
                    <Link to="/" className="text-sm block">&bull; Projects</Link>
                    <Link to="/" className="text-sm block">&bull; Album</Link>
                    <Link to="/" className="text-sm block">&bull; About</Link>
                    <Link to="/" className="text-sm block">&bull; Blog</Link>
                    <Link to="/" className="text-sm block">&bull; News</Link>
                </div>
                <div className="mx-auto">
                    <h1 className="text-white mb-2 block">Useful Links</h1>
                    <Link to="/" className="text-sm block">&bull; Trainings</Link>
                    <Link to="/" className="text-sm block">&bull; Projects</Link>
                    <Link to="/" className="text-sm block">&bull; Album</Link>
                    <Link to="/" className="text-sm block">&bull; About</Link>
                    <Link to="/" className="text-sm block">&bull; Blog</Link>
                    <Link to="/" className="text-sm block">&bull; News</Link>
                </div>

        </footer>
    )
}

export default Footer
