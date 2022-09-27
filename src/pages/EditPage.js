import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUserByid = async () => {
      const user = await axios.get(`/users/${id}`);
      const { name, gender, email } = await user.data;
      setName(name);
      setEmail(email);
      setGender(gender);
    };
    getUserByid();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const users = { name, email, gender };
    try {
      await axios.put(`/users/${id}`, users);
    } catch (error) {
      console.log(error);
    }
    navigate("/");
    console.log("update");
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form>
          <div className="field">
            <label htmlFor="">Name</label>
            <div className="control">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              onClick={handleUpdate}
              type="submit"
              className="button is-success p-3 m-1"
            >
              Update
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

export default EditPage;
