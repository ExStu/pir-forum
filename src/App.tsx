import { Route, Routes } from "react-router-dom";

import BaseLayout from "@Layout/BaseLayout";

import Home from "@Pages/Home";

const App = () => (
  <Routes>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home />} />
    </Route>
  </Routes>
);

export default App;
