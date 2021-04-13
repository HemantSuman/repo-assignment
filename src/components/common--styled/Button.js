/**
 * Button - component use for display html button tag
 *
 */


import React from 'react';
const Button = React.forwardRef((props, ref) => {
	return <button optionsformfndex={props.optionsFormIndex} type="button" parentname={props.optionsFormCount} name={props.name} className={props.className} onClick={props.onClick}> {props.label} </button>
})
export default Button
