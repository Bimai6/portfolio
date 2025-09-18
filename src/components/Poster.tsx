import "/src/styles.css";

const Poster = () => {
    return (
        <div className="flex flex-col order-1 lg:order-2 bg-white h-screen overflow-y-hidden">
            <div className="flex flex-col text-purple-800 font-extrabold h-full w-full">
                <div className="flex flex-col text-7xl lg:text-8xl mt-5 mx-5 mb-auto">
                    <p>MARIO</p>
                    <p>LEBRERO</p>
                </div>
                <img className="self-center h-auto lg:w-4/6 md:w-3/6 w-4/6"
                src="https://res.cloudinary.com/demqnwfff/image/upload/v1741285597/mepurple_ljpwvb.png" alt="Mario Lebrero's portrait"/>
                <div className="mx-5 flex flex-col place-items-end text-5xl mt-auto mb-7">
                    <p>WEB</p>
                    <p>DEVELOPER</p>
                </div>
            </div>
            
        </div>
    )
}

export default Poster