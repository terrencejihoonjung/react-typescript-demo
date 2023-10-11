// import Greet from "./components/Greet";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Button from "./components/Button";
// import Input from "./components/Input";
// import Container from "./components/Container";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";

function App() {
  return (
    <div>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
