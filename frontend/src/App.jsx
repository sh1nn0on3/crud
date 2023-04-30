import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Student from "./components/Student";
import CreateStudent from "./components/CreateStudent";
import UpdateData from "./components/UpdateData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student/>} />
          <Route path="/create" element={<CreateStudent/>} />
          <Route path="/update/:id" element={<UpdateData/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
