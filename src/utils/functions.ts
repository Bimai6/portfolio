import { Dispatch, SetStateAction } from "react";

export function handleWindowResize(stateSetter : Dispatch<SetStateAction<boolean>>) {
    const handleResize = () => stateSetter(window.innerWidth >= 1024);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
}