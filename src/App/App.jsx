import React, { useEffect, useState } from "react";

import FlexH3G from "./components/layout/FlexH3G/FlexH3G.jsx";
import Header from "./components/ui/Header/Header.jsx";
import NavBar from "./components/ui/NavBar/NavBar.jsx";
import FlexW1G from "./components/layout/FlexW1G/FlexW1G.jsx";
import Footer from "./components/ui/Footer/Footer.jsx";
import MemeForm from "./components/MemeForm/MemeForm.jsx";
import MemeViewer from "./components/ui/MemeViewer/MemeViewer";
import { DummyMeme } from "./interfaces/common";
import Button from "./components/Button/Button.jsx";


/*npm run gen-ui Header*/
const App = (props) => {
const [current, setcurrent] = useState(DummyMeme);
const [images, setimages] = useState([{id:0, url:'https://th.bing.com/th/id/R.7d34d07748581bb86355d59c1a100562?rik=OclN5Axox74KJA&riu=http%3a%2f%2ffreelargeimages.com%2fwp-content%2fuploads%2f2014%2f11%2fFunny_Memes_401491.jpg&ehk=hCJqFpXutxV%2fZgwMefJuquhSVSrG2pNJu0%2fw1%2bUkWsw%3d&risl=&pid=ImgRaw&r=0'}]);
  return (

    <div className="App">
      <FlexH3G>
        <Header></Header>
        <NavBar></NavBar>
        <FlexW1G>
          
          <MemeViewer meme={current} image={images.find(img=>img.id===current.imageId)} basePath=""></MemeViewer>
          <MemeForm meme={current}  onMemeChange={(newMeme)=> {
            setcurrent(newMeme);
          }}></MemeForm>

        </FlexW1G>
        <Footer></Footer>
      </FlexH3G>
    </div>

  )
};


export default App;