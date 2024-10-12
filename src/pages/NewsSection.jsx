import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getNewsData } from "../redux/features/NewsSlice";
import { RxCross1 } from "react-icons/rx";
const NewsSection = () => {
  const dispatch = useDispatch();
  const date = new Date();
  const dateSlice = date.toString().slice(0, 28);
  const [dateValue, setDateValue] = useState(dateSlice);
  const newsData = useSelector((val) => val.news.NewsData);
  useEffect(() => {
    const handleNewsData = async () => {
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
          console.log(res);
          dispatch(getNewsData(res?.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
    handleNewsData();
  }, [dispatch]);
  return (
    <div>
      {newsData &&
        newsData.map((news) => (
          <div className="flex " key={news?.id}>
            <div className=" w-[274px] h-[313px]   bg-white shadow-lg rounded-md p-2 m-2 ">
              <div className="flex justify-end ">
                <RxCross1 className="text-red-500 text-xl " />
              </div>
              <p className="font-bold">{news?.title}</p>
              <p className=" text-ellipsis ">{news?.body}</p>
              <p className=" text-gray-800 ">{dateValue}</p>
              <img
                src="https://www.masscommunicationtalk.com/wp-content/uploads/2011/10/News-handing.gif"
                alt=""
                className="h-[122px] w-[224px]"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default NewsSection;
