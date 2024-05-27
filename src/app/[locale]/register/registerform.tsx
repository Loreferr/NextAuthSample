"use client";

import { FC } from "react";
import { createUser } from "../action";
import { useFormState } from "react-dom";

interface FormErrorProps {
  errors?: string[];
}
const FormError: FC<FormErrorProps> = ({ errors }) => {
  if (!errors?.length) return null;

  return (
    <div className="p-2">
      {errors.map((err) => {
        return (
          <p className="text-red-500 list-item text-tiny" key={err}>
            {err}
          </p>
        );
      })}
    </div>
  );
};

export const Registerform = () => {
  const [state, formAction] = useFormState(createUser, { success: false });
  console.log(state);

  return (
    <div className="card border-2 border-black p-2 w-96 flex flex-col space-y-4 justify-center items-center bg-orange-300">
      <h1 className="text-2xl">Register</h1>
      <form action={formAction} className=" space-y-8 flex flex-col ">
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="username">name</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="name"
            type="name"
            placeholder="name"
          />
          <FormError errors={state.errors?.name} />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="username">Username</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="username"
            type="username"
            placeholder="Username"
          />
          <FormError errors={state.errors?.username} />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="username">Email</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="email"
            type="email"
            placeholder="email"
          />
          <FormError errors={state.errors?.email} />
        </div>
        <div className="inputfield flex flex-col justify-center items-start">
          <label htmlFor="password">Password</label>
          <input
            className="text-black border-2 border-black rounded-md"
            name="password"
            type="password"
            placeholder="Password"
          />
          <FormError errors={state.errors?.password} />
        </div>
        <button className="bg-black text-white p-2 rounded-md" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default Registerform;
