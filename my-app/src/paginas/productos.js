import React from "react";
import ItemListContainer from "../components/NavBar/ItemListContainer";

const Productos = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <ItemListContainer />
    </div>
  );
};

export default Productos;
