import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = async (id) => {
    await axios.delete(`/users/${id}`);
    console.log("user deleted");
    return Users();
  };

  const Users = async () => {
    try {
      const req = await axios.get("/users");
      const res = await req.data;
      setUsers(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    Users();
  }, []);

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half ">
        <Link to={"/create-users"} className="button is-success p-3">
          Add user
        </Link>
        <table className="table is-bordered is-striped is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={user.id.toString()}>
                  <td>{i + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.gender}</td>
                  <td>
                    <Link
                      to={`/edit-user/${user.id}`}
                      className="button is-small is-info"
                      type="button"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="button is-small is-danger"
                      type="button "
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

export default UserList;
