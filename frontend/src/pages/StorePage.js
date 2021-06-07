import { useRecoilState, useSetRecoilState } from "recoil";
import { countState, passiveIncomeState } from "../atoms";
import chinese from "../assets/chinese.png";
import workshop from "../assets/workshop.png";
import factory from "../assets/factory.png";

const buildings = [
  {
    id: 1,
    name: "Worker",
    bikes_per_one_per_second: 1,
    owned: 0,
    cost: 10,
    img: chinese,
    description: "Cheap and reliable",
  },
  {
    id: 2,
    name: "Workshop",
    bikes_per_one_per_second: 10,
    owned: 0,
    cost: 100,
    img: workshop,
    description: "Finally you don't have to combine them in your apartment",
  },
  {
    id: 3,
    name: "Factory",
    bikes_per_one_per_second: 100,
    owned: 0,
    cost: 1000,
    img: factory,
    description: "Your own means of production",
  },
];

export default function ShopPage() {
  const [count, setCount] = useRecoilState(countState);
  const setPassiveIncome = useSetRecoilState(passiveIncomeState);

  function handleBuyBuilding(building) {
    if (count < building.cost) return;
    setCount(count - building.cost);
    const index = buildings.findIndex((b) => b.id === building.id);
    buildings[index].owned += 1;
    const passiveIncome = buildings.reduce(
      (total, building) =>
        total + building.bikes_per_one_per_second * building.owned,
      0
    );
    setPassiveIncome(passiveIncome);
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
              <p>{building.description}</p>
              <p>cost: {building.cost}</p>
              <p>
                Produces {building.bikes_per_one_per_second}{" "}
                {building.bikes_per_one_per_second === 1 ? "bike" : "bikes"} /
                second
              </p>
              <p>owned: {building.owned}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
