import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useLocation, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

function PageTransition({ routes }) {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="page" timeout={300}>
        <Routes location={location}>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

PageTransition.propTypes = {
  routes: PropTypes.string.isRequired,
};

export default PageTransition;
