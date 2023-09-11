import React from 'react'
import Button from './components/Button/Button.jsx';

/**
 * 
 * @param {*} props 
 * @returns 
 */

const App=(props) => {


return <div className='App'>Michel c'est le bresil <hr/> 
<Button text={"1000"} bgColor='tomato' style={{width: "500px", padding:"60px 80px"}}/> <hr/>
<Button text='Jenson' onClick={(arg)=> {console.log('ON M A CALLLLLL', arg)} }/> </div>

};
export default App;