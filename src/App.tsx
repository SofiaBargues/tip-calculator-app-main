import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [bill, setBill] = useState(0);
  const [person, setPerson] = useState(0);
  const [tip, setTip] = useState(0);
  const [isCustom, setIsCustom] = useState(false);

  const tipPerson = person != 0 ? (bill * tip) / 100 / person : "-";
  const totalPerson = person != 0 ? bill / person + Number(tipPerson) : "-";

  console.log(tipPerson);
  return (
    <div className="bg-[#c5e4e7] h-screen  text-2xl flex flex-col justify-between items-center">
      SPLITTER
      <div className="bg-white h-[790px] w-[375px] rounded-t-3xl p-10 flex flex-col gap-10">
        <div className="flex flex-col">
          Bill
          <input
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            type="number"
            className="bg-[#f3f8fb]  w-full rounded-md items-center"
          />
        </div>
        <div>
          Select Tip %
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setTip(5);
                setIsCustom(false);
              }}
              className={
                tip == 5
                  ? " rounded-md bg-[#26c2ad]"
                  : "rounded-md bg-[#00474b]"
              }
            >
              5%
            </button>
            <button
              onClick={() => {
                setIsCustom(false);
                setTip(10);
              }}
              className={
                tip == 10
                  ? " rounded-md bg-[#26c2ad]"
                  : "rounded-md bg-[#00474b]"
              }
            >
              10%
            </button>
            <button
              onClick={() => {
                setIsCustom(false);
                setTip(15);
              }}
              className={
                tip == 15
                  ? " rounded-md bg-[#26c2ad]"
                  : "rounded-md bg-[#00474b]"
              }
            >
              15%
            </button>

            <button
              onClick={() => {
                setIsCustom(false);
                setTip(25);
              }}
              className={
                tip == 25
                  ? " rounded-md bg-[#26c2ad]"
                  : "rounded-md bg-[#00474b]"
              }
            >
              25%
            </button>
            <button
              onClick={() => {
                setIsCustom(false);
                setTip(50);
              }}
              className={
                tip == 50
                  ? " rounded-md bg-[#26c2ad]"
                  : "rounded-md bg-[#00474b]"
              }
            >
              50%
            </button>
            <input
              // value={Number(tip) !== 5 ? tip : ""}
              value={isCustom ? tip : ""}
              onChange={(e) => {
                setIsCustom(true);
                setTip(Number(e.target.value));
              }}
              type="number"
              className={
                tip == 5
                  ? " bg-[#f3f8fb] rounded-sm"
                  : "rounded-sm bg-[#f3f8fb]"
              }
              placeholder="Custom"
            />
          </div>
        </div>
        <div>
          Number of People
          <input
            value={person}
            type="number"
            className="bg-[#f3f8fb]  rounded-md items-center w-full "
            onChange={(e) => setPerson(Number(e.target.value))}
          />
        </div>
        <div className="bg-[#00474b] p-8 h-[205px] rounded-2xl text-white text-sm m">
          <div className="flex flex-row justify-between">
            <div>
              <div>Tip Amount</div>
              <div>/ person</div>
            </div>
            ${tipPerson}
          </div>
          <div className=" flex flex-row justify-between">
            <div>
              <div>Total</div>
              <div>/ person</div>
            </div>
            ${totalPerson}
          </div>
          <div>
            <button
              onClick={() => {
                setIsCustom(false);
                setBill(0);
                setPerson(0);
                setTip(0);
              }}
              className="bg-[#26c2ad] h-10 text-[#00474b] rounded-md  w-full"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
