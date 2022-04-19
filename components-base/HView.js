import {View,StyleSheet} from "react-native";

export const  HView=(props)=>{
    const {style,horizontal, children}=props;
    let combineStyles=StyleSheet.flatten([style,  {  flexDirection:'row'}])
    return ( <>
        <View {...props} style={combineStyles}  >{children}</View>
    </> )
}