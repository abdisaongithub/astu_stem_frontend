import React, {Fragment} from "react";
import {Link,} from "react-router-dom";

const NavBar = () => {
    return (<Fragment>
        <nav className="flex px-10 pt-1 pb-1 shadow sticky top-0 bg-gray-100 z-10">
            <Link to="/" className="flex my-auto">
                <img src="../images/astu_logo.svg" className="w-12" alt=""/>
            </Link>
            <div className="flex-col justify-center ml-5 justify-center my-auto">
                <p className="text-[30px] font-bold my-0 py-0 leading-none">ASTU</p>
                <p className="text-[12px] font-medium my-0 py-0">S.T.E.M Center</p>
            </div>

            <ul className="flex my-auto ml-auto mr-5 text-[18px]">
                <Link to="/trainings" className="mx-2 hover:text-red-600"><li>Trainings</li></Link>
                <Link to="/about" className="mx-2 hover:text-red-600"><li>About</li></Link>
                <Link to="/awards" className="mx-2 hover:text-red-600"><li>Projects</li></Link>
                <Link to="/blog" className="mx-2 hover:text-red-600"><li>Blog</li></Link>
                <Link to="/news" className="mx-2 hover:text-red-600"><li>News</li></Link>
            </ul>

            {/*<p className="my-auto mx-auto pl-32 text-center text-[28px]">Home</p>*/}

            {/*<i className="ml-auto my-auto fa-solid fa-bars text-[40px] text-black-600 "/>*/}
        </nav>
    </Fragment>)
}

export default NavBar
