export default function DeleteLocalSave() {
  function handleDeleteLocalSave() {
    localStorage.removeItem("save");
  }

  return (
    <button onClick={handleDeleteLocalSave}>Delete Local Game Save</button>
  );
}
