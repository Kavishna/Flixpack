import React from "react";
import Card from "../CardList/Card/Card";
import { useSelector } from "react-redux";

const MyList = () => {
  const mylist = useSelector((state) => state.list.mylist);
  return (
    <div className=" bg-gray-light flex items-center justify-center flex-col  ">
      <div className="w-72 bg-gray-light pt-7 pb-5 text-white-primary text-xl font-semibold md:w-full md:bg-gray-dark md:pl-24">
        <h2>My List</h2>
      </div>
      <div className="grid gap-x-6  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {mylist.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            subtitle={card.subtitle}
            description={card.description}
            color={card.color}
            inlist
          />
        ))}
      </div>
    </div>
  );
};

export default MyList;
