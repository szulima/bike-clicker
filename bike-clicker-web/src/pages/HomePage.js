import Counter from "../components/Counter";
import Bike from "../components/Bike";
import Level from "../components/Level";
import SaveProgress from "../components/SaveProgress";
import DeleteSavedGame from "../components/DeleteSavedGame";

export default function HomePage() {
  return (
    <>
      <h1>Bike Clicker</h1>
      <Counter />
      <Bike />
      <Level />
      <SaveProgress />
      <DeleteSavedGame />
    </>
  );
}
