import Card from "./Card";
function Tours({tours , removeTour}) {
    return (
        <div className="flex flex-col justify-center items-center mt-4">
            <div className=" border-4 border-dashed border-indigo-600 rounded-xl p-3 text-2xl font-serif w-max  justify-center">
                <h1 className="text-3xl font-bold  font-sans" >
                    Tour with Neeraj
                </h1>
            </div>
            <div className="flex  justify-center flex-wrap flex-row max-w-screen-xl mx-auto my-0" >
                {
                    tours.map( (tour) =>{
                        return <Card {...tour} removeTour = {removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;