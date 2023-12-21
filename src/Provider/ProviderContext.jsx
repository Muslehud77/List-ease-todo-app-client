/* eslint-disable react/prop-types */
import { createContext } from 'react';


export const ContextData = createContext()


const ProviderContext = ({children}) => {

    const data = {
        "name" : 'musleh'
    }




    return (
        <ContextData.Provider value={data}>
            {children}
        </ContextData.Provider>
    );
};

export default ProviderContext;