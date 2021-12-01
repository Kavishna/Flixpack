import theWitcher from "../../../images/The Witcher- Nightmare of the Wolf.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faList } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
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
          <FontAwesomeIcon
            className=" cursor-pointer mx-5 text-2xl"
            icon={faList}
            inverse
          />
          <FontAwesomeIcon
            className=" cursor-pointer text-2xl"
            icon={faHeart}
            inverse
          />
        </div>
      </div>
      <div className="w-80 pl-3 pt-4">
        <h1 className="text">{props.title}</h1>
        <h2 className="text">{props.subtitle}</h2>
        <p className="text-sm w-60 pt-3 pb-5">{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
