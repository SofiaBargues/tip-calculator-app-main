import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// <MyButton tip={5} isActive={tip==5}
function MyButton({ onClick, tip, isActive }) {
  return (
    <button
      onClick={onClick}
      className={
        isActive
          ? " rounded-md bg-[#26c2ad]  p-2"
          : "rounded-md bg-[#00474b] p-2"
      }
    >
      {tip}%
    </button>
  );
}
function App() {
  const [bill, setBill] = useState(0);
  const [person, setPerson] = useState(0);
  const [tip, setTip] = useState(0);
  const [isCustom, setIsCustom] = useState(false);

  const tipPerson =
    person != 0 ? ((bill * tip) / 100 / person).toFixed(2) : " - ";
  const totalPerson =
    person != 0 ? (bill / person + Number(tipPerson)).toFixed(2) : " - ";

  console.log(tipPerson);
  return (
    <div className="bg-[#c5e4e7] h-full font-spaceMono flex flex-col justify-between items-center">
      <div className="font-semibold text-[#4b7272] m-8 text-2xl ">
        S P L I<br></br>T T E R
      </div>
      <div className="bg-white h-[790px] w-[375px] rounded-t-3xl p-10 flex flex-col gap-10">
        <div className="flex flex-col">
          <div className="text-[#5f7373] text-base font-semibold my-1">
            Bill
          </div>
          <input
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            type="number"
            className="bg-[#f3f8fb] w-full h-11 rounded-md items-center text-end text-2xl font-semibold text-[#013a3a]"
          />
        </div>
        <div>
          <div className="text-[#5f7373] text-base font-semibold my-3">
            Select Tip %
          </div>
          <div className="grid grid-cols-2 gap-4 text-2xl text-[#f9ffff]">
            <MyButton
              onClick={() => {
                setTip(5);
                setIsCustom(false);
              }}
              tip={5}
              isActive={tip == 5}
            ></MyButton>
            <MyButton
              onClick={() => {
                setTip(10);
                setIsCustom(false);
              }}
              tip={10}
              isActive={tip == 10}
            ></MyButton>
            <MyButton
              onClick={() => {
                setTip(15);
                setIsCustom(false);
              }}
              tip={15}
              isActive={tip == 15}
            ></MyButton>
            <MyButton
              onClick={() => {
                setTip(25);
                setIsCustom(false);
              }}
              tip={25}
              isActive={tip == 25}
            ></MyButton>
            <MyButton
              onClick={() => {
                setTip(50);
                setIsCustom(false);
              }}
              tip={50}
              isActive={tip == 50}
            ></MyButton>

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
                  ? " bg-[#f3f8fb] rounded-sm  text-end"
                  : "rounded-sm bg-[#f3f8fb]  text-end placeholder:font-semibold font-semibold text-[#013a3a] placeholder:text-[#94abac]"
              }
              placeholder="Custom"
            />
          </div>
        </div>
        <div>
          <div className="text-[#5f7373] text-base font-semibold my-3">
            Number of People
          </div>
          <input
            value={person}
            type="number"
            className="bg-[#f3f8fb] w-full h-11 rounded-md items-center text-end text-2xl font-semibold text-[#013a3a]"
            onChange={(e) => setPerson(Number(e.target.value))}
          />
        </div>
        <div className="bg-[#00474b] p-8 h-[205px] flex gap-4 flex-col rounded-2xl text-white text-sm ">
          <div className="flex flex-row justify-between">
            <div>
              <div className="font-semibold">Tip Amount</div>
              <div className="text-xs text-[#699fa2] font-semibold">
                / person
              </div>
            </div>
            <div className="text-3xl font-semibold  text-[#1db59e]">
              ${tipPerson}
            </div>
          </div>
          <div className=" flex flex-row justify-between">
            <div>
              <div className="font-semibold">Total</div>
              <div className="text-xs text-[#699fa2] font-semibold">
                / person
              </div>
            </div>
            <div className="text-3xl font-semibold  text-[#1db59e]">
              ${totalPerson}
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setIsCustom(false);
                setBill(0);
                setPerson(0);
                setTip(0);
              }}
              className="bg-[#26c2ad] font-bold text-xl h-10  text-[#00474b] rounded-md  w-full"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
