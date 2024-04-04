import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Start from "./pages/Start";
import Main from "./pages/Main";
import NewPostDog from "./pages/NewPostDog";
import NewPostDogWithCaption from "./pages/NewPostDogWithCaption";
import NewPostBurger from "./pages/NewPostBurger";
import NewPostBurgerWithCaption from "./pages/NewPostBurgerWithCaption";
import NewPostHouse from "./pages/NewPostHouse";
import NewPostHouseWithCaption from "./pages/NewPostHouseWithCaption";
import EndScreen from "./pages/EndScreen";
import ClickPlusBtn from "./pages/ClickPlusBtn";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/main":
        title = "";
        metaDescription = "";
        break;
      case "/new-post-dog":
        title = "";
        metaDescription = "";
        break;
      case "/new-post-dog-with-caption":
        title = "";
        metaDescription = "";
        break;
      case "/new-post-burger":
        title = "";
        metaDescription = "";
        break;
      case "/new-post-burger-with-caption":
        title = "";
        metaDescription = "";
        break;
      case "/new-post-house":
        title = "";
        metaDescription = "";
        break;
      case "/new-post-house-with-caption":
        title = "";
        metaDescription = "";
        break;
      case "/end-screen":
        title = "";
        metaDescription = "";
        break;
      case "/click-plus-btn":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/main" element={<Main />} />
      <Route path="/new-post-dog" element={<NewPostDog />} />
      <Route
        path="/new-post-dog-with-caption"
        element={<NewPostDogWithCaption />}
      />
      <Route path="/new-post-burger" element={<NewPostBurger />} />
      <Route
        path="/new-post-burger-with-caption"
        element={<NewPostBurgerWithCaption />}
      />
      <Route path="/new-post-house" element={<NewPostHouse />} />
      <Route
        path="/new-post-house-with-caption"
        element={<NewPostHouseWithCaption />}
      />
      <Route path="/end-screen" element={<EndScreen />} />
      <Route path="/click-plus-btn" element={<ClickPlusBtn />} />
    </Routes>
  );
}
export default App;
