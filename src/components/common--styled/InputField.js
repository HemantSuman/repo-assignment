/**
 * InputField - component use for display html input field
 *
 */

import React from 'react';
import { css } from '@emotion/css';
const inputFieldStyle = css`
    background: #fff;
	height: 32px;
	line-height: 32px;
	display: inline-block;
	border-radius: 0.25rem;
	border: #d8dbe0 1px solid;
`

const InputField = React.forwardRef((props, ref) => {
  return <input name={props.name} optionsformindex={props.optionsFormIndex} defaultValue={props.defaultValue} onChange={e => props.onChange(e)} type="text"  className={inputFieldStyle} placeholder={props.placeholder}/>
})
export default InputField
