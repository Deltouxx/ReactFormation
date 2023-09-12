import React, { useEffect, useState } from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button=(props)=> {

    const [isClickled, setIsClicked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsClicked(false);
        },1000);
    }, [isClickled]);
    

    console.log(props)

  return (
    <button onClick={(evt)=>{
        setIsClicked(true)
      if(undefined !== props.onClick) props.onClick();
    }}
        className={isClickled?style.Button+' '+style.clicked: style.Button}
        style={{   backgroundColor: props.bgColor, 
        ...props.style,    
    }}
    type={props.type}
    > {props.children}</button>
  )
};

Button.propTypes = {
    children : PropTypes.any.isRequired,
    text: PropTypes.string.isRequired,
    bgColor : PropTypes.oneOf(['skyblue', 'tomato', 'transparent', 'green']).isRequired, 
    style : PropTypes.shape({
        width : PropTypes.string, 
        padding : PropTypes.string, 
    }),
    type: PropTypes.oneOf(["button", "submit", "reset", undefined]),
    onClick : PropTypes.func,

}

Button.defaultProps = {
    text : "Toto c'est pas le brezzzzzil",
    bgColor : "green",
    type : "button"
}
export default Button