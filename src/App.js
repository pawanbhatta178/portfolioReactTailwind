import React, { useContext } from "react";
import ScrollProgress from "./components/ScrollProgress";
import SideBar from "./components/sideBar/SideBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Works from "./components/Works";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { AppContext } from "./AppProvider";

const darkThemeApp = "App bg-gray-800 text-gray-200";
const lightThemeApp = "App bg-gray-200 text-gray-800";

function App() {
  const { themeMode } = useContext(AppContext);

  return (
    <div className={themeMode === "lightTheme" ? lightThemeApp : darkThemeApp}>
      <Header />
      <SideBar />
      <ThemeSwitcher />
      <ScrollProgress />
      <Works />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
