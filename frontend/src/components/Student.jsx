import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = () => {
  const [student, setStudent] = useState([]);
  console.log("🚀 ~ file: Student.jsx:6 ~ Student ~ student:", student);
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        console.log(res.data);
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8081/delete/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-slate-500 ">
      <div className="w-100 bg-white rounded-[8px] p-3">
        <div>
          <Link
            to="/create"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Add +
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <table className="w-[700px] mt-5 ">
            <thead>
              <tr>
                <th className="w-[10%]  ">A</th>
                <th className="w-[20%]">Name</th>
                <th className="w-[60%] ">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {student.map((data, index) => (
                <tr key={index}>
                  <td>{index + 1} </td>
                  <td>{data.Name} </td>
                  <td>{data.Email}</td>
                  <td className="flex">
                    <Link
                      to={`/update/${data.ID}`}
                      type="button"
                      className="focus:outline-none text-black bg-yellow-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                    >
                      Update
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(data.ID)}
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Student;
