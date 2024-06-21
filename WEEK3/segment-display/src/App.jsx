import React, { useState } from "react";
import NumberSegmentComponent from "./components/NumberSegmentComponent";
import HoursSegmentComponent from "./components/HoursSegmentComponent";

function App() {
  const [number, setNumber] = useState(0);

  const handleChangeNumber = () => {
    setNumber((prevNumber) => (prevNumber >= 9 ? 0 : prevNumber + 1));
  };
  return (
    <div className="grid m-12">
      <div className="">
        <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  ">
          NIVEL 1
        </h1>
        <NumberSegmentComponent number={1} />
      </div>

      <div className="mt-12">
        <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  ">
          NIVEL 2
        </h1>
        <NumberSegmentComponent number={number} />
        <button
          className="button bg-red-700 w-28   "
          onClick={handleChangeNumber}
        >
          +1
        </button>
      </div>
      <div className="mt-12">
        <h1 class="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  ">
          NIVEL 3
        </h1>

        <HoursSegmentComponent />
      </div>
    </div>
  );
}

export default App;
