import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { useForm } from "react-hook-form";
import { Inertia } from "@inertiajs/inertia";

const Register = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterClick = (values) => {
    console.log(values);
    Inertia.post("/Register", values, {
      onSuccess: () => {},
    });
  };

  return (
    <div>
      <div>
        <h1>Register</h1>
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
        <button onClick={() => handleSubmit(onRegisterClick)()}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
