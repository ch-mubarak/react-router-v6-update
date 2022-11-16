import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="hi">hi</Link>
      <Outlet />
    </section>
  );
};

export default Welcome;
