import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {animate, motion} from "framer-motion"

const Navbar = ()=>{
    return (
        <div className="navbar">
            {<Sidebar/>}
            <div className="wrapper">
                <motion.span initial= {{opacity:0,scale:0.5} }animate= {{opacity:1, scale:1}} transition={{duration : 0.5}}></motion.span>
                <div className="social">
                    <a href="https://instagram.com/the.ankursingh_"><img src="/instagram.png" alt="" /></a>
                    <a href="https://github.com/AnkurSingh1411"><img src="/github.png" alt="" /></a>
                    <a href="https://www.youtube.com/channel/UCR-fnDs33F00DD3leK-i6Fw"><img src="/youtube.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/ankur-singh-0a63571a1/"><img src="/linkedin.png" alt="" /></a>
                </div>


            </div>
        </div>
    )
}

export default Navbar