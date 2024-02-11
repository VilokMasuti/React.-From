/* eslint-disable react/prop-types */

import Card from "./Card";

const Cards = ({ users, handleRemove }) => {
  return (
    <div className=" w-full   overflow-auto max-h-96 p-4 flex justify-center flex-nowrap  gap-4">
      {users.map((item, index) => {
        return (
          <Card
            handleRemove={handleRemove}
            id={index}
            key={index}
            user={item}
          />
        );
      })}
    </div>
  );
};

export default Cards;
