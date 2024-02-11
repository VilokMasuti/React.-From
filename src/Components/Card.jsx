/* eslint-disable react/prop-types */
const Card = ({ user, handleRemove, id }) => {
  return (
    <>
      <div className=" w-[160px]  bg-red-300 mt-5 ml-5 rounded-md ">
        <div className=" flex items-center justify-center mt-3">
          <img
            className=" w-11 h-11 rounded-full bg-black"
            src={user.image}
            alt=""
          ></img>
        </div>
        <div className=" opacity-50">
          <h3 className="  pl-3 text-black"> {user.email}</h3>
        </div>
        <div className=" overflow-hidden">
          <h1 className=" text-blue-50 font-semibold pl-12   underline">
            {user.name}
          </h1>
          <p className=" font-light text-cyan-50  pl-2 leading-1 tracking-tight">
            In the Krishna Charitas, Krishna is born her husband,
          </p>
        </div>
        <button
          onClick={() => handleRemove(id)}
          className=" px-3 py-1 bg-red-700 text-xs rounded-lg font-semibold text-white ml-6 "
        >
          REMOVE ME
        </button>
      </div>
    </>
  );
};

export default Card;
