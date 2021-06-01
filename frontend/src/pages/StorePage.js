import { useRecoilState } from "recoil";
import { buildingsState, countState } from "../atoms";

export default function ShopPage() {
  const [buildings, setBuildings] = useRecoilState(buildingsState);
  const [count, setCount] = useRecoilState(countState);

  function handleBuyBuilding(building) {
    if (count < building.cost) return;
    setCount(count - building.cost);
    setBuildings((buildings) => {
      const index = buildings.findIndex((b) => b.id === building.id);
      const newBuildings = [
        ...buildings.slice(0, index),
        { ...building, owned: building.owned + 1 },
        ...buildings.slice(index + 1),
      ];
      return newBuildings;
    });
  }

  return (
    <>
      <h1>Shop</h1>
      <p>Building buildings doesn't work yet, sorry!</p>
      <div className="buildings">
        {buildings.map((building) => {
          return (
            <div
              className="building"
              key={building.id}
              // onClick={() => handleBuyBuilding(building)}
            >
              <img src={building.img} alt={building.name} width="50" />
              <h3>{building.name}</h3>
              <p>cost: {building.cost}</p>
              <p>Produces {building.bikesPerSecond} bikes / second</p>
              <p>owned: {building.owned}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
