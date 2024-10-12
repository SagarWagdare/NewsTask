import { useSelector } from "react-redux";
import FeedbackForm from "./FeedbackForm";
import FeedBackSection from "./FeedbackSection";
import ToggleSection from "./ToggleSection";

const Sidebar = () => {
  const toggleFormStatus = useSelector(
    (toggle) => toggle.news.toggleFormStatus
  );
  return (
    <div
      className={`flex flex-row w-screen transition-all duration-700  ${
        toggleFormStatus && "backdrop-blur-sm"
      }`}
    >
      <div className="p-10 shadow-black  h-auto rounded-lg bg-[#ecf0f2]">
        <div className=" w-[300px] bg-white p-4 flex rounded-lg shadow-lg">
          <div className="mx-2">
            <img
              src="https://th.bing.com/th/id/OIP.YjAvVDcl5JYNEKBad2m1HgAAAA?rs=1&pid=ImgDetMain"
              alt="user-image"
              className="w-12 rounded-full"
            />
          </div>
          <div>
            <p className="font-bold text-lg">Hi Reader,</p>
            <p className="">Here is your News!</p>
          </div>
        </div>
        {toggleFormStatus !== true && <ToggleSection />}
        <FeedBackSection />
      </div>

      <div className="z-0  ">{toggleFormStatus && <FeedbackForm />}</div>
    </div>
  );
};

export default Sidebar;
