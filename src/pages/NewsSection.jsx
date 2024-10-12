import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteNewsData, getNewsData } from "../redux/features/NewsSlice";
import { RxCross1 } from "react-icons/rx";
import { TbArrowsRight } from "react-icons/tb";
const NewsSection = () => {
  const dispatch = useDispatch();
  const date = new Date();

  const dateSlice = date.toString().slice(0, 28);
  const [dateValue, setDateValue] = useState(dateSlice);
  const { NewsData, toggleStatus } = useSelector((val) => val.news);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalData, setTotalData] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = NewsData?.slice(indexOfFirstItem, indexOfLastItem);
  console.log("👉 ~ NewsSection ~ currentItems⭐", currentItems);
  const totalPages = Math.ceil(totalData / rowsPerPage);
  useEffect(() => {
    const handleNewsData = async () => {
      await axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
          console.log(res);
          dispatch(getNewsData(res?.data));
          setTotalData(res?.data.length - 1);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    handleNewsData();
  }, [dispatch]);

  const handleNext = () => {
    setCurrentPage((next) => Math.min(next + 1, totalPages));
  };
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {toggleStatus ? (
        <div className="flex flex-wrap pt-8 z-0  gap-2 items-center justify-center">
          {currentItems &&
            currentItems.map((news) => (
              <div
                key={news?.id}
                className=" w-[270px] h-[290px]   bg-white shadow-2xl rounded-md p-4 m-2  flex flex-col "
              >
                <div className="flex justify-end py-2">
                  <button onClick={() => dispatch(deleteNewsData(news?.id))}>
                    <RxCross1 className="text-red-400 text-xl cursor-pointer hover:text-red-700" />
                  </button>
                </div>

                <p className="font-bold line-clamp-1 text-ellipsis">
                  {news?.title}
                </p>
                <p className=" line-clamp-2">{news?.body}</p>

                <p className=" text-gray-500 font-semibold">{dateValue}</p>
                <img
                  src="https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
                  alt="news-image"
                  className="h-[122px] w-[224px] rounded-lg object-cover"
                />
              </div>
            ))}
        </div>
      ) : (
        <div className="flex flex-col">
          {currentItems &&
            currentItems.map((news) => (
              <div key={news?.id} className="flex flex-wrap gap-8">
                <div className=" w-[900px] h-[100px] bg-white shadow-lg rounded-md p-6 m-2 flex items-center gap-2 ">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
                    alt="news-image"
                    className=" w-[60px] h-[60px] rounded-full object-cover"
                  />

                  <div className="truncate">
                    <p className="font-bold truncate">{news?.title}</p>
                    <p className="  truncate ">{news?.body}</p>

                    <p className=" text-gray-500 font-semibold">{dateValue}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button onClick={() => dispatch(deleteNewsData(news?.id))}>
                    <RxCross1 className="text-red-400 text-xl cursor-pointer hover:text-red-700 bg-white rounded-full w-10 h-10 p-2 shadow-lg" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
      <div className="flex-wrap flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            onClick={() => handlePageClick(index + 1)}
            className={` text-gray-600  p-2 px-4  rounded-full cursor-pointer mx-1 ${
              currentPage === index + 1
                ? "bg-white  shadow-lg"
                : "bg-gray-400  "
            }`}
            key={index}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={handleNext}
          className="  text-gray-500 text-xl p-3  cursor-pointer disabled:bg-gray-500 disabled:text-white rounded-full  "
        >
          <TbArrowsRight />
        </button>
      </div>
    </>
  );
};

export default NewsSection;
