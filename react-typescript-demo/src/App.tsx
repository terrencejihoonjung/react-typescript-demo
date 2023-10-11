// import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Button from "./components/Button";
// import Input from "./components/Input";
// import Container from "./components/Container";
// import Private from "./components/auth/Private";
// import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
type Person = {
  id: number;
  name: string;
};

function App() {
  const people: Person[] = [
    { id: 1, name: "Batman" },
    { id: 2, name: "Superman" },
    { id: 3, name: "Wonder Woman" },
  ];

  return (
    <div>
      <List<Person> items={people} onClick={(item) => console.log(item)} />
    </div>
  );
}

export default App;
