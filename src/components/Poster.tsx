import "/src/styles.css";
import './textStyle.css';

const Poster = () => {
    return (
        <div className="flex flex-col bg-white h-screen w-1/3 overflow-y-hidden">
            <div className="flex flex-col text-purple-800 font-extrabold h-full w-full">
                <div className="name_text flex flex-col text-8xl mt-5 mx-5 mb-auto">
                    <p>MARIO</p>
                    <p>LEBRERO</p>
                </div>
                <img className="self-center h-auto w-4/6"
                src="https://res.cloudinary.com/demqnwfff/image/upload/v1741285597/mepurple_ljpwvb.png" alt="Mario Lebrero's portrait"/>
                <div className="statement_text mx-5 flex flex-col place-items-end text-5xl mt-auto mb-7">
                    <p>WEB</p>
                    <p>DEVELOPER</p>
                </div>
            </div>
            
        </div>
    )
}

export default Poster