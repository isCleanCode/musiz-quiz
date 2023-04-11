import React, { useState /* useEffect */ } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function AddForm({ handleHideAddForm, songsListArr, addNewSong }) {
  const overlayStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: "rgb(1, 1, 1 , 0.5)",
  };
  const addFormStyle = {
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 2,
    backgroundColor: "white",
    borderRadius: "1rem",
    minHeight: "200px",
  };

  const [state, setState] = useState({
    songTitle: "",
  });

  const handleSongChange = (e) => {
    setState({
      songTitle: e.target.value,
    });
  };
  let createSong = (e) => {
    const song = {
      id: songsListArr.length + 1,
      title: state.songTitle,
      countSing: 0,
      countPlay: 0,
      countLikes: 0,
      liked: false,
      singClicked: false,
      playClicked: false,
      disLikesClicked: false,
      countDisLikes: 0,
    };
    handleHideAddForm();
    addNewSong(song);
  };

  return (
    <>
      <form
        // onSubmit={createSong}
        style={addFormStyle}
        className=" flex flex-col items-center justify-center md:w-2/5  w-3/5 p-1"
        action=""
      >
        <h1 className=" text- mb-2">Добавить песню</h1>
        <div className=" mx-3 flex justify-center items-center w-5/6">
          <input
            onChange={handleSongChange}
            style={{ outline: "none", padding: "1px" }}
            placeholder=""
            value={state.songTitle}
            type="text"
            name="songTitle"
            autoComplete="off"
            className=" w-4/5 md:w-2/4 my-3 shadow-lg rounded-lg bg-slate-400 text-slate-800  focus-within:border-none"
          />
        </div>

        <button
          onClick={createSong}
          // type="submit"
          className="px-2 py-1 my-3  w-3/4 bg-blue-400 sm:w-1/4 rounded-lg shadow-lg hover:scale-105 ease-in-out duration-150 active:scale-90"
        >
          Add song
        </button>
        <button onClick={handleHideAddForm}>
          <AiFillCloseCircle
            className="cursor-pointer hover: text-gray-400 hover:text-gray-100 hover:scale-110 ease-in-out duration-200 active:scale-75"
            style={{
              width: "20px",
              height: "20px",
              position: "absolute",
              top: "15px",
              right: "15px",
            }}
          />
        </button>
      </form>
      <div
        className="overlay"
        onClick={handleHideAddForm}
        style={overlayStyle}
      ></div>
    </>
  );
}

export default AddForm;
