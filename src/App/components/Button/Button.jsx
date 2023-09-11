import React from 'react'
import style from './Button.module.css'
import PropTypes from 'prop-types'

const Button=(props)=> {
    console.log(props)
  return (
    <button onClick= {(evt)=> {
    props.onClick("@@@");
    }}
        className={style.Button}  style={{
        backgroundColor: props.bgColor, 
        ...props.style,    
    }}> {props.text}</button>
  )
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor : PropTypes.oneOf(['skyblue', 'tomato', 'transparent']).isRequired, 
    style : PropTypes.shape({
        width : PropTypes.string, 
        padding : PropTypes.string, 
    }),

    onClick : PropTypes.func.isRequired,

}

Button.defaultProps = {
    text : "Toto c'est pas le brezzzzzil",
    bgColor : "skyblue",
}
export default Button