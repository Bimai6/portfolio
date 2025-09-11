import { SlideProps } from "../types/props"

const SlideButton = ({event, char}: SlideProps) => {
    return(
        <button
            onClick={event}
            className="hover:cursor-pointer bg-purple-800 text-white rounded-xl px-3 ml-3"
        >
            {char}
        </button>
    )
}

export default SlideButton