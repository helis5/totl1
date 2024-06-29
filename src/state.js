// import React, { createContext, useContext, useState } from 'react';

import React from "react";
import App from "./App";

const NewsContext = React.createContext();

const MyProvider = () => {
    return(
        <NewsContext.Provider value={{

                text: "Текст события"

        }}>
            <App />
        </NewsContext.Provider>
    )
}

export default MyProvider;