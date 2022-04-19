import React, {createContext, useContext, useEffect, useState} from "react";
import "../styles/globals.css";
import { wrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactReduxContext } from "react-redux";
import {primary, success} from "../helper/themes";
import {ColorContext,DirectionContext,LanguageContext,DarkModeContext,} from "../helper/context";
import {View} from "react-native";
import {darkColor, mainColor} from "../helper/colors";


function MyApp({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false);
    const [themeColor, setThemeColor] = useState(mainColor);
    const [direction, setDirection] = useState('rtl');
    const [language, setLanguage] = useState('farsi');

    useEffect(()=>{
        //setColor(purple2(darkMode));

    },[darkMode])

    return (
        <ReactReduxContext.Consumer>
            {({ store }) => (
                <PersistGate
                    persistor={store.__PERSISTOR}
                    loading={<div>Loading</div>}
                >
                    <ColorContext.Provider value={[themeColor, setThemeColor]}>
                        <LanguageContext.Provider value={[language, setLanguage]}>
                            <DarkModeContext.Provider value={[darkMode, setDarkMode]}>
                                <DirectionContext.Provider value={[direction, setDirection]}>
                                    <View dir={direction} style={{flex:1,backgroundColor:darkMode?darkColor[50] :themeColor[50]}}>
                                        <Component  {...pageProps}/>
                                    </View>
                                </DirectionContext.Provider>
                            </DarkModeContext.Provider>
                        </LanguageContext.Provider>
                    </ColorContext.Provider>
                </PersistGate>
            )}
        </ReactReduxContext.Consumer>

    );
}

export default wrapper.withRedux(MyApp);

