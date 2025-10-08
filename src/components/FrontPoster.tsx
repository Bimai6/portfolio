import { FrontPosterProps } from "@/types/props";
import {motion} from "framer-motion";
import { spring } from "@/types/transitions";
import "@/components/animations.css"

const FrontPoster = ({handleClick, isNotClicked, isNotLargeScreen}: FrontPosterProps) => {

    const shouldAnimate = isNotClicked && isNotLargeScreen;

    return (<div onClick={handleClick} className="flex flex-col text-purple-800 font-extrabold h-full w-full">
        <div 
            className={`${shouldAnimate ? "animate-mario-lebrero" : ""} flex flex-col text-7xl lg:text-8xl mt-5 mx-5 mb-auto`}
        >
            <p>MARIO</p>
            <p>LEBRERO</p>
        </div>
        {shouldAnimate ? <motion.img
            className={`animate-pulse-scale self-center h-auto sm:max-w-[350px] md:max-w-[400px] lg:max-w-[8000px] lg:w-4/6 md:w-3/6 w-4/6`}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={ { ...spring , delay: 0.7, damping: 50}}
            src="https://res.cloudinary.com/demqnwfff/image/upload/v1741285597/mepurple_ljpwvb.png"
            alt="Mario Lebrero's portrait"
        /> : <img
            className={`self-center h-auto sm:max-w-[350px] md:max-w-[400px] lg:max-w-[8000px] lg:w-4/6 md:w-3/6 w-4/6`}
            src="https://res.cloudinary.com/demqnwfff/image/upload/v1741285597/mepurple_ljpwvb.png"
            alt="Mario Lebrero's portrait"
        />}
        <div 
        className={`${shouldAnimate ? "animate-web-developer" : ""} mx-5 flex flex-col place-items-end text-5xl mt-auto mb-7`}
        >
            <p>WEB</p>
            <p>DEVELOPER</p>
        </div>
    </div>
)};

export default FrontPoster