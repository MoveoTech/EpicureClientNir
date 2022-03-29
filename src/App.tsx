import "./App.scss";
import HomePage from "./pages/home-page/mobile-home-page-component";
import Restaurants from "./pages/restaurants/restaurants-component";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Chefs from "./pages/chefs/chefs-component";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames="page"
        unmountOnExit
      >
        <Routes>
          <Route path="homepage" element={<HomePage />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="chefs" element={<Chefs />} />
          <Route path="*" element={<Navigate to="homepage" replace />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
