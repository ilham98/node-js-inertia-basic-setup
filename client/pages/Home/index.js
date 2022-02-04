import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Home = (props) => {
  const onLogoutClick = () => {
    Inertia.post("/logout", {});
  };
  const onDashboardClick = () => {
    Inertia.get("/dashboard", {});
  };
  const { username } = usePage().props;
  console.log(username);
  return (
    <div>
      {!username ? (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      ) : (
        <div>
          <button onClick={onDashboardClick}>Dashboard</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Home;
