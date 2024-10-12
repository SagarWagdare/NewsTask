import { useDispatch, useSelector } from "react-redux";
import { toggleForm } from "../redux/features/NewsSlice";
import { useState } from "react";

const FeedBackSection = () => {
  const dispatch = useDispatch();
  const [toggleValue, setToggleValue] = useState(false);
  const toggleFormStatus = useSelector(
    (toggle) => toggle.news.toggleFormStatus
  );
  const handleToggle = () => {
    dispatch(toggleForm(toggleValue));
    setToggleValue(!toggleValue);
  };
  return (
    <div className="my-5 w-[300px] bg-white p-4 flex flex-col rounded-lg shadow-lg justify-center items-center gap-2">
      <p className="font-bold text-2xl ">Have a Feedback?</p>
      <button
        onClick={handleToggle}
        className={` p-4 px-10 rounded-lg font-bold text-lg  ${
          toggleFormStatus
            ? "bg-red-300 hover:bg-red-200"
            : "bg-[#A3FFD3] hover:bg-[#7efec0]"
        }`}
      >
        We are Listening!
      </button>
    </div>
  );
};

export default FeedBackSection;
