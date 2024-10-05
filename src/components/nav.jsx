import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { FiHome, FiVideo, FiUsers, FiUser } from 'react-icons/fi'; 
import { CiMenuBurger, CiSearch } from 'react-icons/ci'; 
import { IoMdMic } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";


function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); 
  };

 const key = 'AIzaSyApvD7xDyMolvwgWNWG_p4GftDa7TzG3nM'
  const [list , setList] = useState([])
 

  useEffect(() => {
    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${key}`)
    .then((response) => response.json())
.then((json) => {console.log(json)
setList(json.items)
});
  }, []);

  function convertDuration(isoDuration) {
    const matches = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = (matches[1] ? parseInt(matches[1]) : 0) * 60;
    const minutes = (matches[2] ? parseInt(matches[2]) : 0) + hours;
    const seconds = matches[3] ? parseInt(matches[3]) : 0;

    return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function formatViewCount(viewCount) {
    return Number(viewCount).toLocaleString();
}
  
  return (
    <div className="">
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
<div className={`lg:block hidden  min-h-screen ${isSidebarOpen ? 'w-[15%]' : 'w-[10%]'}`}>
<ul className={`flex flex-col py-5 ${isSidebarOpen ? 'p-5' : 'p-1 items-center'}`}>
  <li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded">
    <FiHome className="text-xl" />
    <Link to="" className={`mx-2 ${isSidebarOpen ? 'block' : 'hidden'}`}>Dashboard</Link>
  </li>
  <li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded ">
    <FiVideo className="text-xl" />
    <Link to="" className={`mx-2 ${isSidebarOpen ? 'block' : 'hidden'}`}>Shorts</Link>
  </li>
  <li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded ">
    <FiUsers className="text-xl" />
    <Link to="" className={`mx-2 ${isSidebarOpen ? 'block' : 'hidden'}`}>Subscribes</Link>
  </li>
  <li className="flex items-center hover:bg-gray-400 p-2 rounded ">
    <FiUser className="text-xl" />
    <Link to="" className={`mx-2 ${isSidebarOpen ? 'block' : 'hidden'}`}>You</Link>
  </li>
</ul>
</div>

<div className={`lg:hidden ${isSidebarOpen ? 'block' : 'hidden'} absolute z-10 bg-white top-16 left-0 w-full`}>
<ul className="flex flex-col items-start p-5">
<li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded ">
  <FiHome className="text-xl" />
  <Link to="" className="mx-2">Dashboard</Link>
</li>
<li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded ">
  <FiVideo className="text-xl" />
  <Link to="" className="mx-2">Shorts</Link>
</li>
<li className="flex items-center mb-5 hover:bg-gray-400 p-2 rounded ">
  <FiUsers className="text-xl" />
  <Link to="" className="mx-2">Subscribes</Link>
</li>
<li className="flex items-center hover:bg-gray-400 p-2 rounded ">
  <FiUser className="text-xl" />
  <Link to="" className="mx-2">You</Link>
</li>
</ul>
</div>


      <div className="p-5">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {list.map((video) => (
    <Link to={`/Video/${video.id}`} key={video.id}>
        <div className="video-card rounded-lg shadow-lg hover:shadow-xl transition-shadow  ">
        <div className="relative">
            <img
              src={video.snippet.thumbnails.default.url}
              alt=""
              className="w-full object-cover rounded-t-lg" 
            />
            <p className="text-sm text-white bg-black bg-opacity-70 absolute bottom-2 right-2 px-2 py-1 rounded">
              {convertDuration(video.contentDetails.duration)}
            </p>
          </div>

          <div className="p-3 ">
            <p className="text-lg text-wrap font-semibold mb-2 ">
              {video.snippet.title}
            </p>
            <p className="text-sm text-gray-600">{formatViewCount(video.statistics.viewCount)}Views</p>
            <p className="text-sm text-gray-600" > {video.snippet.channelTitle}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

      </div>


    </div>
  );
}

export default Nav;
