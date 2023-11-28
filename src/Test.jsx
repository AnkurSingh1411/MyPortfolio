import React, { useState } from "react";
import { motion, spring } from "framer-motion";

const Test = () => {
    const [open, setOpen] = useState(false)
    const variants = {
        visible: {
            opacity: 1,
            x: 100,
            transition: { staggerChildren:0.2}
        },
        hidden: { opacity: 0 }
    }

    const items = ["item1", "item2", "item3", "item4"]
    return (
        <div className="course">
            <motion.ul initial= "hidden" animate= "visible" variants={variants}>
                {items.map((item, i) => (
                    <motion.li variants={variants} key={item} custom={i}>
                        {item}
                    </motion.li>
                ))}

            </motion.ul>
        </div>
    )
}


// product.map((product, index) => (
//     <ul key={index}>
//         <li>{index + 1}</li>
//         <li>{product.name}</li>
//         <li>{product.category}</li>
//         <li>{product.price}</li>
//         <li><button onClick={() => deleteProduct(product._id)}>delete</button>
//             <Link to={"/update/" + product._id}>Update</Link>
//         </li>

//     </ul>
export default Test