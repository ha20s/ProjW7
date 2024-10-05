import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiHome, FiVideo, FiUsers, FiUser } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";

function Video() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [list, setList] = useState([]);
  const [Suggested, setSuggested] = useState([]);
  const { id } = useParams();
  const key = "AIzaSyApvD7xDyMolvwgWNWG_p4GftDa7TzG3nM";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${key}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setList(json.items);
      });
  }, [id]);

  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${key}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setSuggested(json.items);
      });
  }, []);

  return (
    <div>
      <div className="p-5">
        <div className="flex gap-5 items-center justify-between relative">
          <button className="" onClick={toggleSidebar}>
            <CiMenuBurger className="text-2xl" />
          </button>

          <Link to="">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_1280.png"
              width={70}
              height={50}
              alt="Logo"
            />
          </Link>

<div className="flex items-center gap-2 flex-grow">
<div className="flex items-center border-2 border-gray-400 rounded-full p-2 w-full max-w-md">
            <input
              type="text"
              className="px-2 w-full bg-transparent "
              placeholder="Search..."
            />
            <CiSearch className="text-xl text-gray-500" />
          </div>

          <div className="flex">
            <IoMdMic className="text-3xl border rounded-full border-gray-400 p-1" />
          </div>

</div>

          <div>
          <HiDotsVertical className="text-3xl border rounded-full border-gray-400 p-1"  />
          </div>
        </div>
      </div>

      <div className="flex ">
        <div
          className={`lg:block hidden  min-h-screen ${
            isSidebarOpen ? "w-[15%]" : "w-[10%]"
          }`}
        >
          <ul
            className={`flex flex-col py-5 ${
              isSidebarOpen ? "p-5" : "p-1 items-center"
            }`}
          >
            <li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded">
              <FiHome className="text-xl" />
              <Link
                to=""
                className={`mx-2 ${isSidebarOpen ? "block" : "hidden"}`}
              >
                Dashboard
              </Link>
            </li>
            <li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded ">
              <FiVideo className="text-xl" />
              <Link
                to=""
                className={`mx-2 ${isSidebarOpen ? "block" : "hidden"}`}
              >
                Shorts
              </Link>
            </li>
            <li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded ">
              <FiUsers className="text-xl" />
              <Link
                to=""
                className={`mx-2 ${isSidebarOpen ? "block" : "hidden"}`}
              >
                Subscribes
              </Link>
            </li>
            <li className="flex items-center hover:bg-gray-400 p-2 rounded ">
              <FiUser className="text-xl" />
              <Link
                to=""
                className={`mx-2 ${isSidebarOpen ? "block" : "hidden"}`}
              >
                You
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`lg:hidden ${
            isSidebarOpen ? "block" : "hidden"
          } absolute  bg-white top-16 left-0 w-full`}
        >
          <ul className="flex flex-col items-start p-5">
            <li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded ">
              <FiHome className="text-xl" />
              <Link to="" className="mx-2">
                Dashboard
              </Link>
            </li>
            <li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded ">
              <FiVideo className="text-xl" />
              <Link to="" className="mx-2">
                Shorts
              </Link>
            </li>
            <li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded ">
              <FiUsers className="text-xl" />
              <Link to="" className="mx-2">
                Subscribes
              </Link>
            </li>
            <li className="flex items-center hover:bg-gray-400 p-2 rounded ">
              <FiUser className="text-xl" />
              <Link to="" className="mx-2">
                You
              </Link>
            </li>
          </ul>
        </div>

        <div className="p-5">
          {list.length === 0 ? (
            <p className="text-center text-xl font-semibold">Loading...</p>
          ) : (
            <div className="flex flex-col lg:flex-row w-full justify-around lg:gap-0 gap-5">
              <div className="flex flex-col lg:w-[60%]">
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  frameborder="0"
                  className="mb-5 aspect-video  "
                ></iframe>
                <p className=" text-2xl font-bold mb-2">
                  {list[0].snippet.title}
                </p>
                <p className=" text-gray-600 text-sm ">
                  {list[0].snippet.description}
                </p>
                <p></p>
              </div>

              <div className="flex flex-col w-full lg:w-[30%]">
                <div className=" shadow-lg rounded-lg border border-gray-200 mb-3 w-full p-6 flex items-center gap-3 ">
                  <FaLinkedin className="text-2xl text-blue-700" />
                  <div> <p className="text-lg ">Connect with me on</p>
                    <button className="text-blue-700 font-semibold hover:underline"> LinkedIn: ha20s</button>
                  </div>
                </div>

                <p className="text-xl font-semibold">Suggested Videos</p>
                {Suggested.length !== 0 ? (
                  Suggested.map((video, index) => (
                    <Link to={`/Video/${video.id}`} key={index}>
                      <div className="flex my-2 gap-2">
                        <img
                          src={video.snippet.thumbnails.default.url}
                          alt=""
                        />
                        <p>{video.snippet.title}</p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p>No suggested videos found.</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;
