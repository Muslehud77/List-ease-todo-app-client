import  { useContext } from 'react';
import { ContextData } from '../Provider/ProviderContext';

const useContextInfo = () => {

    const data = useContext(ContextData)

    return data
};

export default useContextInfo;