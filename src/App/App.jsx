import React from 'react'
import Button from './components/Button/Button.jsx';

/**
 * 
 * @param {*} props 
 * @returns 
 */

const App=(props) => {


return <div className='App'>Michel c'est le bresil <hr/> 
<Button  bgColor='tomato' style={{width: "500px", padding:"60px 80px"}}> Ok <img src='https://th.bing.com/th/id/R.3b909a5730af9f1cd80d5c2b9db5b1db?rik=%2fMf%2fbzT3xucdKw&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fclubpenguin%2fimages%2fa%2fac%2fBrazil_flag.PNG%2frevision%2flatest%3fcb%3d20140308220844&ehk=NqeK5phNMKIuimZy68fIzrJnGj4ZH4%2fk8y9IRtqaSRo%3d&risl=&pid=ImgRaw&r=0' style={{height:"32px", width:"33px"}}/> </Button> <hr/>
<Button text='Jenson' onClick={(arg)=> {console.log('ON M A CALLLLLL', arg)} }/> </div>

};
export default App;