import Layout from "../components/Layout";
import { Plant } from "../components/PlantItem";
import PlantList from "../components/PlantList";
import React from "react";

const plants: Plant[] = [
  {
    name: `Plant1`,
    plantType: "A good plant",
    hydrationLevel: 50,
    lit: false,
    img:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const Home = () => (
  <Layout pageTitle={"Dashboard"}>
    <PlantList plants={plants} />
  </Layout>
);

export default Home;
