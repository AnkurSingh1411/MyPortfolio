import { useRef , useEffect } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Fatoura.work",
    img: "https://fatoura.work/assets/images/section1.png",
    description:
      "Platform which allows the user to generate professional invoices, manage payment, inventory, generate accounting reports. Worked on Invoicing and subscription plan modules.Being a Full stack developer, I created the complete API with the help of Node.js and its user interface with React.js. In addition I also have perform testing with respect to all the possible scenarios with Jest unit testing library.",
    demoLink: "https://fatoura.work/"
  },
  {
    id: 2,
    title: "Aper",
    img: "/aper.jpg",
    description:
      "Designed and developed APER, a storytelling platform for empowering writers in Gangwon province, South Korea - Created a user-friendly interface that allows writers to focus solely on their stories without distractions - Provided tools and support for writers to bring their ideas to life, whether it's a short story, novel, or poetry - Transformed the writing approach for users.",
    demoLink: "https://aper.cc"
  },
  {
    id: 3,
    title: "Netzero",
    img: "/netzro.png",
    description:
      "Net Zero Game is the biggest sustainability NFT game which allows the user to run and earn. It is the NFT game built on Binance Smart Chain with an aim to increase awareness of the effect of greenhouse gas emissions, deforestation and living a more sustainable lifestyle.Worked on some frontend components and integrated the APIs. Created the two game modes: The Biosphere Mode or the Infinite Runner Mode!",
    demoLink: "https://www.netzerogame.io/"
  },
  {
    id: 4,
    title: "My fit Mantra",
    img: "/mfm.png",
    description:
      "My Fit Mantra (MFM) is an ultimate fitness app designed to cater to the diverse needs of trainers and individuals seeking to achieve their fitness goals. MFM facilitates seamless communication between trainers and clients through its Instant Chat feature. MFM also fosters a sense of community through its Friendly & Strong Community feature.",
    demoLink: "https://myfitmantra.com/"
  }
];
const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
              <button>See Demo</button>
            </a>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };


  const Portfolio = () => {
    useEffect(() => {
      // Check if the device is mobile
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      // If it's a mobile device, add a rel="noreferrer" attribute to all anchor tags
      if (isMobile) {
        const links = document.querySelectorAll("a");
        links.forEach(link => {
          link.setAttribute("rel", "noreferrer");
        });
      }
    }, []); // Run this effect only once when the component mounts
  
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>Featured Works</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };

export default Portfolio