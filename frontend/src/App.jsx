// import Course from "./components/Course";
import SignUp from "./components/SignUp";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}
