// typing an object prop
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

function Person({ name }: PersonProps) {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
}

export default Person;
