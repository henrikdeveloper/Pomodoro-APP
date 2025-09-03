import React, { createContext, useState } from 'react'

export const SoundContext = createContext(null);
export const SoundProvider = ({children}) => {
    const [isSoundOn, setSoundOn] = useState(true);
    const value = {isSoundOn, setSoundOn}
    return(
        <SoundContext.Provider value={value}>
            {children}
        </SoundContext.Provider>
    )
}