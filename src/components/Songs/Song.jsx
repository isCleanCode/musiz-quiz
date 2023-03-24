import { React /* useState */ } from "react";
import { TiMicrophone } from "react-icons/ti";
import { FaGuitar } from "react-icons/fa";
import {
  AiTwotoneLike,
  AiTwotoneDislike,
  AiFillCloseCircle,
} from "react-icons/ai";

function Song({
  title,
  countDisLikes,
  countLikes,
  countPlay,
  countSing,
  sing,
  play,
  like,
  disLike,
  liked,
  singClicked,
  playClicked,
  disLikeClicked,
  deleteSong,
}) {
  const likeStyle = liked ? "green" : "grey";
  const singStyle = singClicked ? "white" : "rgb(147 197 253)";
  const playStyle = playClicked ? "white" : "rgb(147 197 253)" ;
  const disLikeStyle = disLikeClicked ? "rgb(163, 42, 42)" : "grey" ;

  return (
    <>
      <div
        style={{ position: "relative" }}
        className="song shadow-xl flex flex-col items-center justify-center p-1 mt-3 rounded-lg  bg-slate-700 w-5/6 "
      >
        <div className=" mt-2 p-1 text-gray-400 flex items-baseline flex-col md:flex-row">
          <h1 className="px-3 text-2xl">{title}</h1>
          <div className="flex justify-between">
            <p className="px-3">Will play</p>
            <p className="px-3">{countPlay}</p>
            <p className="px-3">Will sing</p>
            <p className="px-3">{countSing}</p>
          </div>
        </div>

        <ul className="flex p-2 justify-around">
          <li className="px-2 flex justify-between items-center flex-col-reverse md:flex-row ">
            <FaGuitar
            style={{fill: playStyle}}
              onClick={play}
              className="text-2xl text-blue-300 cursor-pointer hover:scale-110 ease-in-out duration-200 active:scale-75"
            />
          </li>
          <li className="px-2 flex justify-between items-center mr-2 ">
            <TiMicrophone
              style={{ fill: singStyle }}
              onClick={sing}
              className="text-2xl text-blue-300 cursor-pointer hover:scale-110 ease-in-out duration-200 active:scale-75"
            />
          </li>
          <li className="px-2 flex justify-between items-center ">
            <AiTwotoneLike
              style={{ fill: likeStyle }}
              onClick={like}
              className=" text-xl cursor-pointer hover:scale-110 ease-in-out duration-200 active:scale-75"
            />

            <p className="px-2" style={{ color: "green" }}>
              {countLikes}
            </p>
          </li>
          <li className="px-2 flex justify-between items-center ">
            <AiTwotoneDislike
            style={{fill: disLikeStyle}}
              onClick={disLike}
              className=" text-xl text-blue-300 cursor-pointer hover:scale-110 ease-in-out duration-200 active:scale-75"
            />
            <p  className="px-2 text-red-600">{countDisLikes}</p>
          </li>
        </ul>
        <AiFillCloseCircle
        onClick={deleteSong}
          className="cursor-pointer hover: text-gray-400 hover:text-gray-100 hover:scale-110 ease-in-out duration-200 active:scale-75"
          style={{
            width: "20px",
            height: "20px",
            position: "absolute",
            top: "15px",
            right: "15px",
          }}
        />
      </div>
    </>
  );
}

export default Song;

// const play = () => {
//   setCountPlay((countPlay) => {
//     return countPlay + 1;
//   });
// };

// const sing = () => {
//   setCountSing((countSing) => {
//     return countSing + 1;
//   });
// };
// const likes = () => {
//   setCountLikes((countLikes) => {
//     return countLikes + 1;
//   });
// };
// const disLikes = () => {
//   setCountDisLikes((countDisLikes) => {
//     return countDisLikes + 1;
//   });
// };
