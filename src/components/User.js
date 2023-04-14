const User = ({ userName, email }) => {
  console.log("user component is rendered...");
  return (
    <div>
      <h1>user name is {userName}</h1>
      <h1>user email is {email}</h1>
    </div>
  );
};

export default User;
