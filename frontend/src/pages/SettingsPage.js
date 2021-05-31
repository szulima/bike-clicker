import LocalSave from "../components/LocalSave";
import DeleteLocalSave from "../components/DeleteLocalSave";
import ServerSave from "../components/ServerSave";
import ServerLoad from "../components/ServerLoad";

export default function SettingsPage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Bike Clicker</h2>
        <h1>Settings</h1>
        <LocalSave />
        <DeleteLocalSave />
        <ServerSave />
        <ServerLoad />
      </div>
    </>
  );
}
