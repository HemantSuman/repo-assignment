/**
 * VariantRowCard - product row dynamic component
 *
 */


import React, {useState, useContext} from 'react';
import {InputField, SelectField} from '..';
import { MyContext } from '../../context/MyContext';

const VariantRowCard = (props) => {
    const contextApi = useContext(MyContext);
    const [variantRowData, updateVariantRowData] = useState({});

    // method to handle the change event of form elements
    const onChangeHandler = (e) => {
        const updatedRowData = {
            ...variantRowData,
            [e.target.name]: e.target.value.trim()
        }
        updateVariantRowData(updatedRowData);

        const updatedData = contextApi.productVariantData.map((item, index) => {
            if (index === props.rowIndex) {
               return updatedRowData; 
            }
            return item
        })
        
        // update the context with the updated row content
        contextApi.setProductVariantData(updatedData );
    }
    return (
            <tr>
                <td><div className="input-group">
                    <InputField onChange={onChangeHandler} name="product" placeholder="ProductCode" value={variantRowData.product}/>
                    </div>
                </td>
                <td>
                    <input type="file" onChange={onChangeHandler}  name="image"/>
                </td>
                {contextApi.optionsObj.length > 0 && contextApi.optionsObj
                .map(function (item, index) {
                    return <td key={item.optionsFormCount} align="left">
                            <SelectField optionObj={contextApi.optionsObj[index]} name={`option${index}`} onChange={onChangeHandler}/>
                        </td>
                }) }
                <td>
                    <div className="input-group"> 
                        <span className="input-group-addon"> $ </span>
                        <InputField onChange={onChangeHandler} name="price" placeholder="Price" value={variantRowData.price} />
                    </div>
                </td>
                <td>
                    <div className="input-group"> 
                        <InputField onChange={onChangeHandler} name="weight" placeholder="Weight" valuue={variantRowData.weight} />
                    </div>
                </td>
                <td>
                    <div className="input-group"> 
                       <InputField onChange={onChangeHandler} name="sku" placeholder="SKU" value={variantRowData.sku} />
                    </div>
                </td>
            </tr>
    )
}

export default VariantRowCard;
