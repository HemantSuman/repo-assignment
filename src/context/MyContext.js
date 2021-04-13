import React, { useState } from 'react';

/**
 * MyContext - use context API for global store object
 *
 */

const MyContext = React.createContext();

const MyProvider = ({children}) => {

    const [optionsObj, setOptionsObj] = useState([]);
    const [productVariantData, setProductVariantData] = useState([]);

    return (
        <MyContext.Provider 
            value={{optionsObj,setOptionsObj, productVariantData, setProductVariantData}}
        >
            {children}
        </MyContext.Provider>
    )
}

export {MyContext, MyProvider}
