import { posterHighlights } from "@/data/posterHighlights";
import { BackPosterProps } from "@/types/props";
import { motion } from "framer-motion";
import { spring } from "@/types/transitions";
import { useEffect, useRef, useState } from "react";

const BackPoster = ({handleClick}: BackPosterProps) =>{ 
    
    const imgRef = useRef(null);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    let item = posterHighlights[currentImgIndex];

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentImgIndex >= posterHighlights.length - 1) {
                setCurrentImgIndex(0);
            } else {
                setCurrentImgIndex(currentImgIndex + 1);
        }
    }, 6000);
        return () => clearTimeout(timer);
    }, [currentImgIndex])

    return (
    <div
        className="flex flex-col h-full w-full items-center bg-white text-purple-800 p-5 text-center lg:mt-8 flex-shrink-0"
        style={{ transform: "rotateY(180deg)" }}
    >
        
        <div 
            key={currentImgIndex} 
            className="flex flex-col"
        >
            <p 
                className="animate-about-me font-bold text-sm md:text-xl lg:text-lg xl:text-xl px-5 pt-4 lg:pt-8 pb-7 lg:pb-12"
            >
                {item.text}
            </p>
            <div className="animate-stories flex flex-col flex-grow my-auto items-center justify-self-center justify-center">
                <img
                    className="object-contain max-h-170 h-full rounded-4xl brightness-110 opacity-75 mb-5"
                    ref={imgRef}
                    src={item.img} 
                    alt={item.alt} 
                />
                <p className={`absolute translate-y-35 px-12 sm:px-0 xl:px-20 ${item.alt === "Mario participating on a poetry slam" ? "lg:translate-y-53" : "lg:translate-y-49"} lg:text-sm xl:text-lg text-white italic`}>{item.quote}</p>
                <p className="absolute translate-y-45 lg:translate-y-60 text-white">{item.author}</p>
            </div>
        </div>
        <motion.p
        className="lg:hidden text-4xl font-bold mt-auto cursor-pointer mt-5 pb-6 flex-shrink-0"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={ { ...spring, delay: 0.3}}
        onClick={handleClick}
        >
            FLIP BACK
        </motion.p>
    </div>
)};

export default BackPoster;