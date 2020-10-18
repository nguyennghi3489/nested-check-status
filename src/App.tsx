import React from "react";
import "./App.css";
import { MenuContainer } from "./menu";
import { dataResponse } from "./data";
import { MenuModel, MenuModelRepsonse } from "./models/Menu";

const createMenuTree = (data: MenuModelRepsonse[]) => {
  const virtualRootData: MenuModelRepsonse = {
    name: "root",
    type: "root",
    items: data,
  };
  return new MenuModel(virtualRootData);
};
function App() {
  const data = createMenuTree(dataResponse);
  return (
    <div className="App">
      <MenuContainer rootMenu={data} />
    </div>
  );
}

export default App;
