import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/create", { name, email })
      .then((res) => {
        console.log("res" + res);
        navigate("/");
      })
      .catch((err) => console.log("err18" + err));
  }

  return (
    <div className="h-screen bg-slate-500 flex items-center justify-center">
      <div className="w-[600px] bg-white p-5 ">
        <h1 className="text-center font-medium mb-3">Add Student</h1>

        <form action="" className="" onSubmit={handleSubmit}>
          <div className="flex gap-5 mb-3 items-center justify-center">
            <label htmlFor="name" className="w-[50px] ">
              Name:
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="bg-gray-50 p-1 border border-gray-300 text-gray-900 text-sm rouded-lg w-full focus:outline-none "
            />
          </div>
          <div className="flex gap-5 mb-3 items-center justify-center">
            <label htmlFor="email" className="w-[50px] ">
              Email:
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="bg-gray-50 p-1 border border-gray-300 text-gray-900 text-sm rouded-lg w-full focus:outline-none "
            />
          </div>
          {/* <div className="flex gap-5 mb-3 items-center justify-center">
            <label htmlFor="password" className="w-[50px] ">Password:</label>
            <input type="password" className="bg-gray-50 p-1 border border-gray-300 text-gray-900 text-sm rouded-lg w-full focus:outline-none " />
          </div> */}
          <button
            // onClick={handleSubmit}
            className="mt-3 p-3 bg-green-600 text-white border-none rounded-[8px] hover:bg-green-900 duration-200 "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
