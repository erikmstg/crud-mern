import UserList from "./components/UserList";
import AddUser from "./pages/AddUser";
import { NavLink, Route, Routes } from "react-router-dom";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create-users" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditPage />} />
      </Routes>
    </>
  );
}

export default App;
