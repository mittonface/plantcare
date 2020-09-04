import PlantItem, { Plant } from "./PlantItem";

const PlantList = ({ plants }: { plants: Plant[] }) => (
  <div className="bg-white shadow overflow-hidden sm:rounded-md">
    <ul>
      {plants.map((plant) => (
        <PlantItem plant={plant} />
      ))}
    </ul>
  </div>
);

export default PlantList;
