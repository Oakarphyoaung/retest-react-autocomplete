import { useState } from "react";

const App = () => {
  const [buss, setBuss] = useState({
    name: "Line 30",
    startStation: "Hle Dan",
    endStation: "Tamwe",
    stations: ["Hle Dan", "Myaynigone", "Mayangone", "Tamwe"],
  });
  return (
    <div>
      <header>
        <button
          onClick={() => {
            setBuss({ ...buss, name: "Line 40 I love code" });
          }}
        >
          Change bus name
        </button>
        <ul>
          <li>Bus Name:{buss.name}</li>
          <li>Stations:{buss.startStation}</li>
          <li>EndStations:{buss.endStation}</li>
          <h2>All Station </h2>
          {buss.stations.map((bus) => {
            return <li key={bus}>{bus}</li>;
          })}
        </ul>
      </header>
    </div>
  );
};

// import User from "./components/User";
// import { useState } from "react";

// const alluser = [
//   { id: 1, name: "aung myanmar", email: "oakar@gmail.com" },
//   { id: 2, name: "hsu thel mwe", email: "oakar2@gmail.com" },
//   { id: 3, name: "chan myae", email: "oakar3@gmail.com" },
//   { id: 4, name: "oakar4", email: "oakar4@gmail.com" },
//   { id: 5, name: "ei phyu", email: "oakar5@gmail.com" },
// ];

// function App() {
//   const [users, setUsers] = useState({ name: "aung", age: 30 });

//   return (
//     // <div margin="0auto">
//     //   <input
//     //     type="text"
//     //     onChange={(e) => {
//     //       const inputText = e.target.value;
//     //       const filteredUsers = alluser.filter((user) => {
//     //         return user.name.includes(inputText);
//     //       });
//     //       setUsers(filteredUsers);
//     //     }}
//     //   />
//     //   {users.map((user) => {
//     //     return (
//     //       <ul>
//     //         <li>{user.name}</li>
//     //       </ul>
//     //     );
//     //   })}
//     // </div>
//     <div></div>
//   );
// }

export default App;
