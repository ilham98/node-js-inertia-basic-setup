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
  const { user } = usePage().props;
  return (
    <div>
      {!user ? (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      ) : (
        <div>
          <h1>Welcome {user.username}!</h1>
          <button onClick={onDashboardClick}>Dashboard</button>
          <button onClick={onLogoutClick}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Home;
