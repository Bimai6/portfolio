import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FrontPoster from "./FrontPoster";
import BackPoster from "./BackPoster";

const Poster = () => {
    const [flipped, setFlipped] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [showBack, setShowBack] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleClick = () => {
        if (!isLargeScreen) setFlipped((prev) => !prev);
        setClicked(true);
    };

    return (
        <div className="flex flex-col order-1 lg:order-2 bg-white h-screen overflow-y-hidden">
            <motion.div
                className="flex flex-col h-full w-full"
                style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                onClick={handleClick}
                whileHover={isLargeScreen ? { rotateY: 180 } : undefined}
                animate={flipped ? { rotateY: 180 } : { rotateY: 0 }}
                transition={{ duration: 0.8 }}
                onUpdate={(latest) => {
                    const rotateY = Number(latest.rotateY || 0);
                    if (rotateY >= 90 && !showBack) {
                        setShowBack(true);
                    } else if (rotateY < 90 && showBack) {
                        setShowBack(false);
                    }
                }}
            >
                <AnimatePresence mode="wait">
                    {!showBack && <FrontPoster isNotClicked={!clicked} isNotLargeScreen={!isLargeScreen} key="front" />}
                    {showBack && <BackPoster key="back" />}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Poster;
