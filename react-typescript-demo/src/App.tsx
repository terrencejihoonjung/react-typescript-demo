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
// import List from "./components/generics/List";
import RandomNumber from "./components/ref/restriction/RandomNumber";

function App() {
  // If isPositive is true, then isNegative must be false
  return (
    <div>
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
