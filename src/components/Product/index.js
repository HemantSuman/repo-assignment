/**
 * Product - use to render landing page with two parent components
 *
 */

import React, {useState, useContext} from 'react';
import { css } from '@emotion/css';
import {Options, Button, VariantRowCard} from '..';
import { MyContext } from '../../context/MyContext';


const tableStyle = css`
    width: 100%;
    td {
        border-bottom: #ccc solid 1px;
        padding: 8px;
    }
    th {
        border-bottom: #ccc solid 1px;
        border-top: #ccc solid 1px;
        padding: 8px;
    }
    .input-group {
        display: flex;
        align-content: stretch;
        '& input': {
            flex: 1 0 auto;
        }        
    }
    .input-group-addon {
        background: #eee;
        border: 1px solid #ccc;
        padding: 0.5em 1em;
    }
`
const tableResponsiveStyle = css`
    min-height: .01%;
    overflow-x: auto;
`
const submitButtonStyle = css`
    width: 100px;
`

const Product = (props) => {

    const contextApi = useContext(MyContext);

    const [variantRow, setVariantRow] = useState([]);
    const [variantRowCount, setVariantRowCount] = useState(0);
        
    /**
     * addVariantsRow - add product row dynamic as variant
     *
     */
    const addVariantsRow = (e) => {
        setVariantRowCount(variantRowCount+1);

        const dataArray = contextApi.productVariantData;
        dataArray.splice(variantRowCount, 0, {});
        contextApi.setProductVariantData(dataArray);
        return setVariantRow([...variantRow, <VariantRowCard  key={variantRowCount} rowIndex={variantRowCount}/>]);
    }

    /**
     * handleSubmit - handle the form submit request
     *
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        const variantDetails = contextApi.productVariantData.map((item, index) => {
            const options = contextApi.optionsObj.map((obj, i) => {
                return {
                    "name": obj.optionsFormName,
                    "value": item["option"+obj.optionsFormCount] !== undefined ? item["option"+obj.optionsFormCount] : null
                }
            });
            let data = {
                ...item,
                "options": options
            }
            delete data.option0;
            delete data.option1;
            delete data.option2;

            return data;
        });
        console.log(variantDetails);
    }

    return (
        <div>            
                <div className="card">
                    <div className="card-header">Options/Variants</div>
                    <div className="card-body">
                        <div className="card">
                            <Options></Options>
                        </div>
                        <div className="card">
                            <div className="card-header">Variants 
                            {/* {JSON.stringify(contextApi.optionsObj)} */}
                                <div className="card-header-actions">
                                    {contextApi.optionsObj && contextApi.optionsObj.length > 0 && <Button onClick={addVariantsRow} label="+"/>}
                                </div>
                            </div>
                            <div className="card-body">
                                <div className={tableResponsiveStyle}>
                                    <form onSubmit={(e) => handleSubmit(e)}>
                                        <table className={tableStyle}>
                                            <thead>
                                                <tr>
                                                    <th align="left">ProductCode</th>
                                                    <th align="left">Image</th>
                                                    {contextApi.optionsObj.length > 0 && contextApi.optionsObj.map((item) => <th key={item.optionsFormCount} align="left">{item.optionsFormName}</th>) }
                                                    <th align="left">Price</th>
                                                    <th align="left">Weight</th>
                                                    <th align="left">SKU</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {variantRow}
                                            </tbody>
                                        </table>
                                        <button type="submit" className={submitButtonStyle}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>            
        </div>
    )
}
export default Product;
