import React, { ReactElement } from "react";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from "react-router-dom";
import routes from "@/common/routes";
import StoreDebugObserver from "@/components/common/StoreDebugObserver";
import { isLocal } from "@/common/constants/env";

function App(): ReactElement {
  return (
    <>
      {isLocal && <StoreDebugObserver />}
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </>
  );
}

export default App;
