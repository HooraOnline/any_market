import {Text as Text1,StyleSheet} from "react-native";
import {useContext,} from "react";
import {DarkModeContext} from "../helpers/context";

export const  Text=(props)=>{
    const {style,darkStyle={color:'#fff'},children}=props;
    let combineStyles=style;
    const [darkMode]=useContext(DarkModeContext);
    if(darkMode){
        combineStyles=StyleSheet.flatten([{fontFamily: "IRANYekanRegular"},style,darkStyle]);
    }

    return ( <>
        <Text1 {...props} style={combineStyles}  >{children}</Text1>
    </> )
}







