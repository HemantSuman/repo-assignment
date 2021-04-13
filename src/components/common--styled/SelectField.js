/**
 * SelectField - component use for display html select field
 *
 */


import React from 'react';
import { css } from '@emotion/css';
const selectFieldStyle = css`
    background: #fff;
	height: 32px;
	line-height: 32px;
	display: inline-block;
	border-radius: 0.25rem;
	border: #d8dbe0 1px solid;
`
const SelectField = React.forwardRef((props, ref) => {

  return <select className={selectFieldStyle} name={props.name} onChange={props.onChange}>
	  		<option>Select</option>
			  {/* {props.optionObj && props.optionObj.optionsValObj.length > 0 && props.optionObj.optionsValObj.map(function(item){
				  return <option>eeeeee</option>;
			  })} */}
			  {props.optionObj.optionsValObj && Object.keys(props.optionObj.optionsValObj).map(key => 
					<option key={key} value={props.optionObj.optionsValObj[key].optionsValueName}>{props.optionObj.optionsValObj[key].optionsValueName}</option>
				)}
	  	</select>
})
export default SelectField
