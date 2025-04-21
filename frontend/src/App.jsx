import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Admin from "./Admin";
import Staff from "./Staff";
import Staff_2 from "./Staff_2";
import Staff_3 from "./Staff_3";
import Staff_4 from "./Staff_4";




function App(){
return (
 <Router>
    <Routes>
      <Route path="/" element = {<Register />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/admin" element = {<Admin/>} />
      <Route path="/staff" element = {<Staff/>} />
      <Route path="/staff2" element = {<Staff_2/>} />
      <Route path="/staff3" element = {<Staff_3/>} />
      <Route path="/staff4" element = {<Staff_4/>} />
    </Routes>
 </Router>
);
};

export default App;
