import { useRef } from "react"
import "./services.scss"
import { motion, useInView } from "framer-motion"


const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }


    }
}
const Services = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate="animate" >
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow
                    <br /> and move forward using</p>
                    2+ years of experience on building
                <hr />


            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business with</h1>
                    {/* <button>LEARN MORE</button> */}
                </div>



            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>MERN Stack</h2>
                    <p>
                        MongoDB for database, Express.js server, React frontend, Node.js runtime—unifying to streamline full-stack JavaScript development for web applications.
                    </p>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Backend Development</h2>
                    <p>
                        I use Node.js for backend development, leveraging its JavaScript capabilities to create scalable, non-blocking, and efficient server-side applications seamlessly.
                    </p>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Database Management</h2>
                    <p>
                        Databases using MongoDB for flexible, JSON-like structures, and MySQL for structured data, ensuring efficient storage and retrieval for diverse application needs.
                    </p>
                </motion.div>


            </motion.div>
        </motion.div>
    )
}

export default Services