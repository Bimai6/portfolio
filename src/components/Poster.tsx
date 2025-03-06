import "/src/styles.css"

const Poster = () => {
    return (
        <div className="bg-white h-full w-1/3">
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
            <div className="bg-purple-700">
                <img src="" alt="Mario Lebrero's image" />
            </div>
        </div>
    )
}

export default Poster