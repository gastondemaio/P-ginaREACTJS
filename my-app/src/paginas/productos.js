import React from "react";
import Items from "../components/ItemList/Items";

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
      <Items />
    </div>
  );
};

export default Productos;
