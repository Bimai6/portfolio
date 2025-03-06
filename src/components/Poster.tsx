import "/src/styles.css"

const Poster = () => {
    return (
        <div className="bg-white h-screen w-1/3 overflow-y-hidden">
            <div className="text-purple-800 font-extrabold">
                <div className="text-8xl">
                    <p>MARIO</p>
                    <p>LEBRERO</p>
                    <p>GARCIA</p>
                </div>
                <div className="mr-1.5 flex flex-col place-items-end mt-14.5 text-5xl">
                    <p>WEB</p>
                    <p>DEVELOPER</p>
                </div>
            </div>
            <div className="bg-gray-500 w-full h-4/6 border-1 border-white">
                <img className="m-auto pt-18 w-90"
                src="https://res.cloudinary.com/demqnwfff/image/upload/v1741285597/mepurple_ljpwvb.png" alt="Mario Lebrero's image"/>
            </div>
        </div>
    )
}

export default Poster