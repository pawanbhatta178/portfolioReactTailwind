import React, { useContext } from "react";
import ScrollProgress from "./components/ScrollProgress";
import SideBar from "./components/sideBar/SideBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
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
      <div className="sm:px-32 px-4" id="Works">
        {" "}
        Elit elit sint do veniam anim ex. Non adipisicing duis voluptate eu
        Lorem Lorem anim Lorem voluptate dolore eu ut. Mollit adipisicing anim
        aliquip exercitation nulla proident laboris duis dolore.Ipsum fugiat
        irure nisi ea amet ex minim reprehenderit sit officia exercitation.
        Velit aute ullamco quis velit excepteur ea. Aute magna dolore
        reprehenderit pariatur laborum excepteur deserunt in nulla officia duis.
        Laboris quis et dolore qui cupidatat quis aute esse est aliquip.
        Exercitation eu adipisicing aliqua consectetur commodo nisi veniam
        laborum adipisicing labore voluptate aliquip. Voluptate nostrud et duis
        incididunt eiusmod consequat enim ad elit quis cillum officia. Commodo
        Lorem eiusmod incididunt dolore ut excepteur. Dolor quis incididunt
        velit dolore enim eiusmod irure mollit. Et amet enim irure pariatur sunt
        do occaecat non non est qui deserunt nostrud. Irure adipisicing labore
        adipisicing excepteur adipisicing culpa consequat nostrud enim
        excepteur. Cupidatat dolore ullamco sit velit mollit tempor tempor.
        Aliqua mollit sunt eiusmod reprehenderit do elit duis est commodo minim
        cupidatat esse commodo exercitation. Occaecat pariatur enim officia enim
        ea adipisicing. Anim anim minim dolore dolor ullamco et cupidatat
        consectetur aliqua excepteur exercitation. Velit quis eiusmod esse qui
        enim sint non non. Esse reprehenderit reprehenderit cillum ea pariatur
        in consequat consequat. Elit id anim sit tempor commodo velit velit
        voluptate ad. Sit id et aute fugiat ad incididunt proident laboris est
        Lorem aute magna velit. Laboris magna eiusmod elit pariatur. Est
        excepteur ea anim labore in cupidatat adipisicing consectetur sunt id
        labore. Aliquip non velit enim in. Qui esse anim labore quis. Minim
        reprehenderit eu elit anim duis nostrud. Ipsum enim commodo officia elit
        adipisicing deserunt ex fugiat consectetur ullamco nostrud nisi Lorem
        labore. Ea est nulla Lorem elit non adipisicing. In ex aliqua velit
        dolore in adipisicing mollit tempor velit ex officia consectetur
        voluptate. Aliqua adipisicing proident non aute nostrud ipsum. Labore in
        aliquip qui qui culpa commodo reprehenderit. Consectetur nostrud ex do
        nisi dolor eu exercitation. Minim veniam aute fugiat eu culpa sint
        aliquip eu et ullamco. Cillum excepteur cupidatat incididunt velit
        nostrud fugiat in ad dolor. Pariatur sit consequat nulla eu aliqua sit
        sit esse. Cupidatat qui qui cupidatat aute amet mollit. Quis culpa
        dolore ullamco dolor ex Lorem magna occaecat. Anim sit quis aliquip quis
        sit esse exercitation laborum reprehenderit ipsum laboris nisi. Ut
        exercitation enim duis dolore aliquip non officia do. Mollit velit non
        anim velit duis reprehenderit sit in eu reprehenderit magna. Lorem elit
        adipisicing pariatur esse aliqua exercitation officia proident qui
        exercitation in sit qui quis. Ullamco esse id dolore ut nostrud duis
        commodo et laborum dolor. Et et aliqua proident deserunt velit anim.
        Pariatur laboris nulla pariatur voluptate dolor excepteur velit anim
        eiusmod cillum incididunt veniam laboris. Excepteur occaecat Lorem amet
        amet proident laborum Lorem elit labore sunt reprehenderit ut ipsum. Id
        non ipsum deserunt eu incididunt tempor. Nisi anim esse veniam
        adipisicing esse proident commodo pariatur aute labore irure sit duis
        id. Commodo cillum sint laborum sunt. Ipsum ad sunt laborum ut ea
        aliquip amet. Non velit fugiat elit cupidatat amet aute incididunt ea
        aute nostrud. Adipisicing commodo adipisicing esse ullamco adipisicing
        non. Non occaecat proident ipsum commodo et et sint velit anim. Qui amet
        enim adipisicing proident culpa culpa eiusmod elit labore minim. Veniam
        minim amet aliqua commodo officia laborum sit ipsum fugiat deserunt et
        sint minim dolore. Ea id occaecat dolor consectetur non quis ex ea anim
        tempor. Nulla est mollit elit velit dolor culpa. Mollit ex elit ex nisi
        velit occaecat.
      </div>
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
