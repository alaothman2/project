import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/manguser.css"
function AllUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:4000/user/delete-user/${id}`,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  function getUsers() {
    axios
      .get("http://localhost:4000/user/users", {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((Response) => {
        setUsers(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="card-body text-center p-5 ">
        <h5 className="card-title text-uppercase mb-0">Manage Users</h5>
      </div>
      
        <div className="container">
          
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="table-responsive">
                  <table className="table no-wrap user-table mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium pl-4"
                        >
                          id
                        </th>

                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          username
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="border-0 text-uppercase font-medium"
                        >
                          Role
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                      <tr  key={user.id}>
                        <td className="pl-4"> {index + 1}</td>
                        <td>
                          <span className="text-muted">{user?.username}</span>
                        </td>
                        <td>
                          <span className="text-muted">{user?.email}</span>
                        </td>
                        <td>
                          <span className="text-muted">{user?.role}</span>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="iconbt"
                            onClick={() => deleteUser(user._id)}
                          >
                            <i className="fa fa-trash"></i>{" "}
                          </button>
                          
                          
                        </td>
                      </tr>
                       ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
     
    </div>
  );
}

export default AllUser;
