/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const From = ({ handleSubmitData }) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    handleSubmitData(data);
    reset();
  };
  return (
    <div className=" flex gap-10 justify-center items-center mt-10 ">
      <form className=" flex gap-10" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          className=" rounded-md px-2 py-1 text-base font-semibold  "
          type="text"
          placeholder="name"
        />
        <input
          {...register("email")}
          className=" rounded-md px-2 py-1 text-base font-semibold  "
          type="text"
          placeholder="email"
        />
        <input
          {...register("image")}
          className=" rounded-md px-2 py-1 text-base font-semibold  "
          type="text"
          placeholder="imgURL"
        />
        <input
          className=" rounded-md px-5 py-1 bg-black  text-white"
          type="submit"
        />
      </form>
    </div>
  );
};

export default From;
