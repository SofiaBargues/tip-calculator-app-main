import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [bill, setBill] = useState(0);

  console.log(bill);
  return (
    <div className="bg-[#c5e4e7] h-screen  text-2xl flex flex-col justify-between items-center">
      SPLITTER
      <div className="bg-white h-[790px] w-[375px] rounded-t-3xl p-10 flex flex-col gap-10">
        <div className="flex flex-col">
          Bill
          <input
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            type="number"
            className="bg-[#f3f8fb]  w-full rounded-md items-center"
          />
        </div>
        <div>
          Select Tip %{" "}
          <div className="grid grid-cols-2">
            <button className="border">5%</button>
            <button className="border">10%</button>
            <button className="border">15%</button>
            <button className="border">25%</button>
            <button className="border">50%</button>
            <input type="text" className="border" placeholder="Custom" />
          </div>
        </div>
        <div>
          Number of People
          <input
            type="text"
            className="bg-[#f3f8fb]  rounded-md items-center w-full "
            placeholder="👤"
          />
        </div>
        <div className="bg-[#00474b] p-8 h-[205px] rounded-2xl text-white text-sm m">
          <div className="flex flex-row justify-between">
            <div>
              <div>Tip Amount</div>
              <div>/ person</div>
            </div>
            $4.20
          </div>
          <div className=" flex flex-row justify-between">
            <div>
              <div>Total</div>
              <div>/ person</div>
            </div>
            $32.79
          </div>
          <div>
            <button className="bg-[#26c2ad] h-10 text-[#00474b] rounded-md  w-full">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;