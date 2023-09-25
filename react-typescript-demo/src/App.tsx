import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

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
      <Status status={"success"} />
      <Oscar>
        <Heading>Placeholder text</Heading>
      </Oscar>

      <Greet name={"terrence"} isLoggedIn={true} />
    </div>
  );
}

export default App;
