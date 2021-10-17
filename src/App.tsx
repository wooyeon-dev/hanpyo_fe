import React, { ReactElement } from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import routes from "@/common/routes";

function App(): ReactElement {
  return <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
}

export default App;
