import { useRecoilState } from "recoil";
import { countState } from "../atoms";
import chinese from "../assets/chinese.png";
// import workshop from "../assets/workshop.png";
// import factory from "../assets/factory.png";

const buildings = [
  {
    id: 1,
    name: "Worker",
    bikes_per_one_per_second: 0.1,
    owned: 0,
    cost: 10,
    img: chinese,
    description: "Worker builds one bike every 10 seconds",
  },
];

export default function ShopPage() {
  // const [buildings, setBuildings] = useRecoilState(buildingsState);
  const [count, setCount] = useRecoilState(countState);

  function handleBuyBuilding(building) {
    if (count < building.cost) return;
    setCount(count - building.cost);
    const index = buildings.findIndex((b) => b.id === building.id);
    buildings[index].owned += 1;
  }

  return (
    <>
      <h1>Shop</h1>
      <div className="buildings">
        {buildings.map((building) => {
          return (
            <div
              className="building"
              key={building.id}
              onClick={() => handleBuyBuilding(building)}
            >
              <img src={building.img} alt={building.name} width="50" />
              <h3>{building.name}</h3>
              <p>cost: {building.cost}</p>
              <p>Produces {building.bikes_per_one_per_second} bikes / second</p>
              <p>owned: {building.owned}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
