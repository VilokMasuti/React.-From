import { useState } from "react";
import Cards from "./Components/Cards";
import From from "./Components/From";

function App() {
  const [users, setUsers] = useState([]);
  const handleSubmitData = data => {
    setUsers([...users, data]);
  };
  const handleRemove = id => {
    setUsers(users.filter((item, index) => index != id));
  };
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-slate-300">
      <div className="container mx-auto">
        <Cards handleRemove={handleRemove} users={users} />
        <From handleSubmitData={handleSubmitData} />
      </div>
    </div>
  );
}

export default App;
