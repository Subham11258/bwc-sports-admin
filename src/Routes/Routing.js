import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import Admin from "../Pages/Admin";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default Routing;
