import {TextInput as TextInput1,StyleSheet} from "react-native";
import {useContext,} from "react";
import {DarkModeContext} from "../../helpers/context";


export const  TextInput=(props)=>{
    const {style,darkStyle={color:'#fff'}}=props;
    let combineStyles=style;
    const [darkMode]=useContext(DarkModeContext);
    if(darkMode){
        combineStyles=StyleSheet.flatten([{fontFamily: "IRANYekanRegular"},style,darkStyle]);
    }

    return ( <>
        <TextInput1 {...props} style={combineStyles}  />
    </> )
}







