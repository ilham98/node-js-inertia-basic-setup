import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLoginClick = (values) => {
    console.log(values);
    Inertia.post("/login", values, {
      onSuccess: () => {},
    });
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <label>Username</label>
          <input
            {...register("username", {
              required: true,
            })}
          />
          <div style={{ color: "red" }}>
            {errors?.username && "Username wajib diisi"}
          </div>
        </div>
        <div>
          <label>Password</label>
          <input
            {...register("password", {
              required: true,
            })}
          />
          <div style={{ color: "red" }}>
            {errors?.password && "Password wajib diisi"}
          </div>
        </div>
        <div style={{ color: "red" }}>{props.error?.message}</div>
        <button onClick={() => handleSubmit(onLoginClick)()}>Login</button>
      </div>
    </div>
  );
};

export default Login;
