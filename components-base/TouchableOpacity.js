import {TouchableOpacity as TouchableOpacity1} from "react-native";
import {useContext, } from "react";
import {DarkModeContext} from "../helper/context";

export const  TouchableOpacity=(props)=>{
    const {children}=props;


    return ( <>
        <TouchableOpacity1 {...props}  >{children}</TouchableOpacity1>
    </> )
}







