import { createContext, FunctionComponent, useContext, useState } from "react";



const Web3Context = createContext(null);


const Web3Provider: FunctionComponent = ({children}:any) => {

    const [web3Api, setWeb3Api] = useState({test:"Hello provider"})

    return(
        <Web3Context.Provider value={web3Api}>
            {children}
        </Web3Context.Provider>
    )
}

export function useWeb3(){
    return useContext(Web3Context);
}


export default Web3Provider;