import React, {createContext, useContext, useEffect, useState} from "react";
import "../styles/globals.css";
import { wrapper } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactReduxContext } from "react-redux";

import {ColorContext,DirectionContext,LanguageContext,DarkModeContext,} from "../helper/context";
import {changeCurrentTheme, darkColors, greenColors, mainColors} from "../helper/colors";
import {useLocalStorage} from "../hoks/useLocalStorage";
import {SafeAreaView, StatusBar,StyleSheet,View} from "react-native-web";


function MyApp({ Component, pageProps }) {
    //const [darkMode, setDarkMode] = useState(false);
    const [darkMode, setDarkMode] = useLocalStorage("darkMode",false);
    const [themeColor, setThemeColor] = useLocalStorage('themeColor',mainColors);
    changeCurrentTheme(themeColor);
    const [direction, setDirection] = useState('rtl');
    const [language, setLanguage] = useState('farsi');

    useEffect(()=>{
        //setColor(purple2(darkMode));
        //if(!themeColor) setThemeColor(mainColors)
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
                                    <SafeAreaView style={styles.container}>
                                        <View dir={direction} style={{flex:1,backgroundColor:darkMode?darkColors[50] :themeColor[20]}}>
                                            <Component  {...pageProps}/>
                                        </View>
                                    </SafeAreaView>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

