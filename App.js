import { BrowserRouter } from "react-router-dom";
import home from "./Components/home";
import home from "./button";
import aboutpage from "./aboutpage";

function app() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>

      <div classname="container">
        <Routes>
          <Route path="/" element={<home />} />

          <Route path="/" exact element={<about />} />

          <Route path="/" exact element={<aboutpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default app;
