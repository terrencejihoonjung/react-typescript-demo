type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

type Person = {
  id: number;
  name: string;
};

function List<T extends Person>({ items, onClick }: ListProps<T>) {
  return (
    <div>
      <h2>List of Items</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.name}
          </div>
        );
      })}
    </div>
  );
}

export default List;
