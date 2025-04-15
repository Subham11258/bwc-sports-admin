import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout/layout";
import Admin from "../Pages/Admin";
import UserManagementParentProfile from "../Pages/UserManagementParentProfile";


const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<Admin/>}/>
        
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;