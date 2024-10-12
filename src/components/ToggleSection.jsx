import { IoListOutline } from "react-icons/io5";
import { PiTableLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { toggleView } from "../redux/features/NewsSlice";

const ToggleSection = () => {
  const toggleStatus = useSelector((val) => val.news.toggleStatus);  const dispatch = useDispatch();
  return (
    <div className="my-5 w-[300px] bg-white p-4 flex flex-col rounded-lg shadow-lg justify-center items-center gap-2">
      <p className="font-bold text-2xl">View Toggle</p>
      <div className="flex gap-2 text-6xl  bg-[#e1edf6]  rounded-lg">
        <button className={toggleStatus?"bg-[#A3FFD3] rounded-s-lg":""} onClick={()=>dispatch(toggleView(true))}>
          <PiTableLight />
        </button>
        <button className={toggleStatus?"":"bg-[#A3FFD3] rounded-e-lg"}  onClick={()=>dispatch(toggleView(false))}>
          <IoListOutline />
        </button>
      </div>
    </div>
  );
};

export default ToggleSection;
