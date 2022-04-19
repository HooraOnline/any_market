import {Text as Text1,StyleSheet} from "react-native";
import {useContext, useEffect, useState} from "react";
import {DarkModeContext} from "../helper/context";

export const  Text=(props)=>{
    const {style,darkStyle={color:'#fff'},children}=props;
    let combineStyles=style;
    const [darkMode]=useContext(DarkModeContext);
    if(darkMode){
        combineStyles=StyleSheet.flatten([style,darkStyle]);
    }

    return ( <>
        <Text1 {...props} style={combineStyles}  >{children}</Text1>
    </> )
}







