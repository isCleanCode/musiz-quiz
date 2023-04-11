import { React, useEffect, useState } from "react";
import Song from "./Song";
// import { songs } from "../../data/data.js";
import AddForm from "../AddForm/AddForm";
import axios /* , {isCancel, AxiosError} */ from "axios";

function Songs() {
  const [state, setState] = useState({
    /* Берем данные с локального хранилища или берем из массива в data.js*/
    // songsListArr: JSON.parse(localStorage.getItem("songsListArr")) || songs,
    songsListArr: [],
  });
  const [showAddForm, setShowAddForm] = useState(false);

  /* Добавление количества лайков, дизлайков и кто будет петь, а кто будет играть  */

  function play(position) {
    const temp = [...state.songsListArr];
    if (!temp[position].playClicked) {
      temp[position].countPlay++;
      temp[position].playClicked = !temp[position].playClicked;
    } else {
      temp[position].countPlay--;
      temp[position].playClicked = !temp[position].playClicked;
    }
    setState({
      songsListArr: temp,
    });
    localStorage.setItem(
      "songsListArr",
      JSON.stringify(temp)
    ); /*  Добавление данных в локальное хранилище */
  }
  /* Добавление количество тех, кто будет петь  */
  function sing(position) {
    const temp = [...state.songsListArr];
    if (!temp[position].singClicked) {
      temp[position].countSing++;
      temp[position].singClicked = !temp[position].singClicked;
    } else {
      temp[position].countSing--;
      temp[position].singClicked = !temp[position].singClicked;
    }

    setState({
      songsListArr: temp,
    });
    localStorage.setItem(
      "songsListArr",
      JSON.stringify(temp)
    ); /*  Добавление данных в локальное хранилище */

    /* Добавление количество лайков  */
  }
  function like(position) {
    const temp = [...state.songsListArr];
    if (!temp[position].liked) {
      temp[position].countLikes++;
      temp[position].liked = !temp[position].liked;
    } else {
      temp[position].countLikes--;
      temp[position].liked = !temp[position].liked;
    }

    setState({
      songsListArr: temp,
    });

    localStorage.setItem(
      "songsListArr",
      JSON.stringify(temp)
    ); /*  Добавление данных в локальное хранилище */
  }
  /* Добавление количество дизлайков  */

  function disLike(position) {
    const temp = [...state.songsListArr];
    if (!temp[position].disLikeClicked) {
      temp[position].countDisLikes++;
      temp[position].disLikeClicked = !temp[position].disLikeClicked;
    } else {
      temp[position].countDisLikes--;
      temp[position].disLikeClicked = !temp[position].disLikeClicked;
    }

    setState({
      songsListArr: temp,
    });
    localStorage.setItem(
      "songsListArr",
      JSON.stringify(temp)
    ); /*  Добавление данных в локальное хранилище */
  }

  /* Функция удаления Песни */

  const deleteSong = (position) => {
    const temp = [...state.songsListArr];
    temp.splice(position, 1);
    console.log(temp);
    setState({
      songsListArr: temp,
    });
    localStorage.setItem("songsListArr", JSON.stringify(temp));
  };
  /* Функция, которая меняет значение состояния state.showAddForm */

  const handleShowAddForm = () => {
    setShowAddForm({ showAddForm: true });
  };
  const handleHideAddForm = () => {
    setShowAddForm({ showAddForm: false });
  };

  /* Добавим новую песню  */

  const addNewSong = (newSong) => {
    setState((state) => {
      const temp = [...state.songsListArr];
      temp.push(newSong);
      localStorage.setItem("songsListArr", JSON.stringify(temp));
      return {
        songsListArr: temp,
      };
    });
  };

  /* Методом map проходимся по массиву обьектов песен и выводим список */

  const songsList = state.songsListArr.map(
    (
      {
        id,
        title,
        countLikes,
        countDisLikes,
        countPlay,
        countSing,
        liked,
        singClicked,
        playClicked,
        disLikeClicked,
      },
      pos
    ) => {
      return (
        <Song
          key={id}
          title={title}
          countSing={countSing}
          countPlay={countPlay}
          countLikes={countLikes}
          countDisLikes={countDisLikes}
          sing={() =>
            sing(pos)
          } /*  Используется анонимная функция для вызова созданных функций*/
          play={() =>
            play(pos)
          } /* Используется анонимная функция для вызова созданных функций */
          like={() =>
            like(pos)
          } /* Используется анонимная функция для вызова созданных функций */
          disLike={() => disLike(pos)}
          liked={liked}
          singClicked={singClicked}
          playClicked={playClicked}
          disLikeClicked={disLikeClicked}
          deleteSong={() => deleteSong(pos)}
        />
      );
    }
  );

  useEffect(() => {
    axios
      .get("https://642e96812b883abc6411c655.mockapi.io/api/quiz/songs")
      .then((res) => {
        setState({
          songsListArr: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  if (state.songsListArr.length === 0)
    return <h1 className=" self-center p-2 m-2">Loading...</h1>;

  return (
    <div>
      <div className="songs flex justify-center flex-col items-center">
        {state.songsListArr.length === 0 ? (
          <h1 className="p-2 m-2">Loading...</h1>
        ) : (
          <div className=" border-b-4">
            <h1 className="text-center   text-white text-2xl p-3 mt-1">
              Cover event
            </h1>
          </div>
        )}

        <button
          onClick={handleShowAddForm}
          className="px-2 py-1 my-4 mt-6 animate-pulse  w-2/5 bg-blue-400 lg:w-1/5 sm:w-1/4 rounded-lg shadow-lg hover:scale-105 ease-in-out duration-150 active:scale-90"
        >
          <p className=" font-medium"> Add song </p>
        </button>

        {showAddForm ? (
          <AddForm
            addNewSong={addNewSong}
            handleHideAddForm={handleHideAddForm}
            songsListArr={state.songsListArr}
          />
        ) : null}
        {songsList}
      </div>
    </div>
  );
}

export default Songs;
