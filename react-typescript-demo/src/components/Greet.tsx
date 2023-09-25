// Specify the types for each property in the props
type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet({ name, messageCount = 0, isLoggedIn }: GreetProps) {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messageCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
}

export default Greet;
