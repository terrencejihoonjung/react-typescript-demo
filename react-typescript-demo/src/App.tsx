// import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "Wayne",
  // };

  // const nameList = [
  //   { first: "Bruce", last: "Wayne" },
  //   { first: "Clark", last: "Kent" },
  //   { first: "Princess", last: "Diana" },
  // ];

  return (
    <div>
      <Button
        handleClick={(e, id) => {
          console.log("Button clicked", e.target, id);
        }}
      />

      <Input
        value=""
        handleChange={(e) => {
          console.log("Input Changed", e.target.value);
        }}
      />
    </div>
  );
}

export default App;
