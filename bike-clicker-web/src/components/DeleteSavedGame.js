export default function DeleteSavedGame() {
  function handleDeleteSavedGameClick() {
    localStorage.removeItem("save");
  }

  return (
    <button onClick={handleDeleteSavedGameClick}>Delete Saved Game</button>
  );
}
