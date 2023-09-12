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
import { store } from "./store/store.js";

/*npm run gen-ui Header*/
const App = (props) => {
const [current, setcurrent] = useState(DummyMeme);
const [images, setimages] = useState([
  {
    id: 0,
    titre : 'MICHELLLLLLLLLL C EST LE BRESIL, Y VA DE VILLE EN VILLE',
    url: "https://risibank.fr/cache/medias/0/12/1285/128588/full.png",
    w: 467,
    h: 348,
  },
]);

useEffect(() => {
  fetch('http://localhost:7956/images').then((resp) =>
  resp.json()).then((imgList) => setimages(imgList))
  

}, [])


  return (

    <div className="App">
      <FlexH3G>
        <Header></Header>
        <NavBar></NavBar>
        <FlexW1G>
          
          <MemeViewer meme={current} image={images.find(img=>img.id===current.imageId)} basePath=""></MemeViewer>
          <MemeForm meme={current}  onMemeChange={(newMeme)=> {
           
            setcurrent(newMeme);
          }}  images={images}/>

        </FlexW1G>
        <Footer></Footer>
      </FlexH3G>
    </div>

  )
};


export default App;