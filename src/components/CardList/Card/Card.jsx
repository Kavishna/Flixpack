import theWitcher from "../../../images/The Witcher- Nightmare of the Wolf.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faList, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addToMyList,
  removeFromMyList,
} from "../../../features/list/listSlice";

import { addToFav, removeFromFav } from "../../../features/fav/favSlice";

const Card = (props) => {
  const mylist = useSelector((state) => state.list.mylist);
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();

  function findCard(id, list) {
    return list.some((card) => card.id === id);
  }

  const obj = {
    id: props.id,
    title: props.title,
    subtitle: props.subtitle,
    description: props.description,
    color: props.color,
  };

  return (
    <div className=" my-6 bg-gray-dark w-72 text-white-primary rounded-lg">
      <div className=" relative w-full">
        <img
          src={theWitcher}
          className="rounded-t-lg w-full"
          alt="The Witcher - Nightmare of the Wolf"
        />

        <div
          className=" absolute w-full h-full top-0 rounded-t-lg"
          style={{ backgroundColor: props.color }}
        ></div>

        <div className=" bg-gray-900 h-10 w-full bg-gray-transparent absolute bottom-0 flex justify-end items-center pr-4">
          <div className="ml-3 mr-auto rounded inline-block text-xs border-2 border-white px-1">
            {props.id}
          </div>
          {renderButtons(props.inlist)}
        </div>
      </div>
      <div className="w-80 pl-3 pt-4">
        <h1 className="text">{props.title}</h1>
        <h2 className="text">{props.subtitle}</h2>
        <p className="text-sm w-60 pt-3 pb-5">{props.description}</p>
      </div>
    </div>
  );

  function renderButtons(prop) {
    if (!prop) {
      return (
        <>
          <FontAwesomeIcon
            className={` cursor-pointer mx-5 text-2xl ${
              findCard(props.id, mylist)
                ? "text-salmon-primary pointer-events-none"
                : "text-white-primary"
            }`}
            icon={faList}
            onClick={() => dispatch(addToMyList(obj))}
            inverse
          />
          <FontAwesomeIcon
            className={` cursor-pointer text-2xl ${
              findCard(props.id, favourites)
                ? "text-salmon-primary pointer-events-none"
                : "text-white-primary"
            }`}
            icon={faHeart}
            onClick={() => dispatch(addToFav(obj))}
            inverse
          />
        </>
      );
    }

    return (
      <FontAwesomeIcon
        className={` cursor-pointer text-3xl`}
        icon={faTimes}
        onClick={() =>
          dispatch(
            props.favourites
              ? removeFromFav({ id: props.id })
              : removeFromMyList({ id: props.id })
          )
        }
      />
    );
  }
};

export default Card;
