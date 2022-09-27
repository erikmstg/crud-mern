import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        name,
        email,
        gender,
      };
      await axios.post("/users", userData);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
    console.log("user created");
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form>
          <div className="field">
            <label htmlFor="">Name</label>
            <div className="control">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="input"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="">Email</label>
            <div className="control">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="text"
                className="input"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor="">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field control">
            <button
              onClick={handleSubmit}
              type="submit"
              className="button is-success p-3 m-1"
            >
              Create
            </button>
            <Link className="button p-3 m-1" to="/">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
