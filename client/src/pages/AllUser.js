import React, { useEffect, useState } from "react";
import axios from "axios";

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
      <div class="card-body text-center p-5">
        <h5 class="card-title text-uppercase mb-0">Manage Users</h5>
      </div>
      {users.map((user, index) => (
        <div class="container" key={user.id}>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="table-responsive">
                  <table class="table no-wrap user-table mb-0">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium pl-4"
                        >
                          id
                        </th>

                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          username
                        </th>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          class="border-0 text-uppercase font-medium"
                        >
                          Added
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="pl-4"> {index + 1}</td>
                        <td>
                          <span class="text-muted">{user.username}</span>
                        </td>
                        <td>
                          <span class="text-muted">{user.email}</span>
                        </td>
                        <td>
                          <span class="text-muted">{user.role}</span>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle"
                          >
                            <i class="fa fa-key"></i>{" "}
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                            onClick={() => deleteUser(user._id)}
                          >
                            <i class="fa fa-trash"></i>{" "}
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          >
                            <i class="fa fa-edit"></i>{" "}
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          >
                            <i class="fa fa-upload"></i>{" "}
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllUser;
