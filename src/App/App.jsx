import React, { useEffect, useState } from "react";

import FlexH3G from "./components/layout/FlexH3G/FlexH3G.jsx";
import Header from "./components/ui/Header/Header.jsx";
import NavBar from "./components/ui/NavBar/NavBar.jsx";
import FlexW1G from "./components/layout/FlexW1G/FlexW1G.jsx";
import Footer from "./components/ui/Footer/Footer.jsx";
import MemeForm from "./components/MemeForm/MemeForm.jsx";

/*npm run gen-ui Header*/
const App = (props) => {

  return (

    <div className="App">
      <FlexH3G>
        <Header></Header>
        <NavBar></NavBar>
        <FlexW1G>
          <div> V</div>
          <MemeForm></MemeForm>
        </FlexW1G>
        <Footer></Footer>
      </FlexH3G>
    </div>

  )
};


export default App;