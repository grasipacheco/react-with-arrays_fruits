import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1339,
      name: "🥭 Mango",
      color: "yellow",
    },
    {
      id: 1340,
      name: "🥑 Abacate",
      color: "green",
    },
  ];

  return (
    <div className="app">
      <ul>
        {fruits.map((fruit) => (
          <Card id={fruit.id} name={fruit.name} color={fruit.color} />
        ))}
      </ul>
    </div>
  );
}
