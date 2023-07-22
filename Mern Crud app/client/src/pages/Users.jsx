import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Users = () => {
  document.title = "Crud App";
  const [user, setUser] = useState([]);
  const _id = useParams();

  const handleDelete = (_id) => {
    axios
      .delete("http://localhost:3001/deleteUser/" + _id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  });

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <table className="table">
          <Link to="/create" className="btn btn-primary my-2">
            Add new user
          </Link>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => {
                        handleDelete(user._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
