import './App.css';
// import {Routes,Route} from "react-router-dom"
import Home from './Component/Home';
// import Root, { rootLoader } from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter as Router, Switch, Route, Routes
} from "react-router-dom";
import Login from './Component/Login';
import Register from './Component/Register';
import "./Component/style.css"
import { useState } from 'react';
import userData from './Contextapi';



function App() {
  const [userloginSetup, setUserLoginSetup] = useState({})
  console.log(userloginSetup?._id)
  return (
    <div className="App">
      <userData.Provider value={{userloginSetup}}>
        <Router>
          <Routes>
            <Route path="/" element={
              userloginSetup && userloginSetup?._id ?
                <Home setUserLoginSetup={setUserLoginSetup} /> : <Login setUserLoginSetup={setUserLoginSetup} />
            } />
            <Route path="/login" element={<Login setUserLoginSetup={setUserLoginSetup} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </userData.Provider>

    </div>
  );
}

export default App;
