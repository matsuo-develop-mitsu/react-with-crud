function App() {
  const Users = [
    {
      name: "Taro",
      age: 23,
    },
    {
      name: "Hanako",
      age: 34,
    },
  ];
  return (
    <>
      {Users.map((user, index) => {
        return <User key={index} name={user.name} age={user.age} />;
      })}
    </>
  );
}

const User = (props) => {
  const { name, age } = props;
  return (
    <div>
      Hi, I'm {name} , and {age} years old
    </div>
  );
};

export default App;
