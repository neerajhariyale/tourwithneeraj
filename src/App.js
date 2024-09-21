import React, { useState } from "react";
import Tours from "./component/Tours";
import data from "./data";

//App
function App() {
  const [tours, setTours] = useState(data)
  //function remove tour()
  function removeTour(id) {
    const newTours = tours.filter(tours => tours.id !== id);
    setTours(newTours);
  }
  //if condition
  if (tours.length === 0) {
    return (
      <div className="h-dvh w-screen flex flex-col justify-center items-center">
        <div className="w-40 h-52  flex flex-col rounded-md items-center justify-center shadow-2xl shadow-red-200">
          <h2 className="font-semibold ">No Tour Left</h2>
          <button
            onClick={() => setTours(data)}
            className="border-solid border-red-600 border-2 rounded-2xl cursor-pointer font-normal bg-[#b4161b21] mt-4 px-6 py-2  not-intrested-btn"
          >
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100vh] font-serif ">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

//export default App
export default App;
