import {View,StyleSheet} from "react-native";

export const  Wrap=(props)=>{
    const {style,horizontal, children}=props;
    let combineStyles=StyleSheet.flatten([style,  {  flexDirection:'row',flexWrap:'wrap',}])
    return ( <>
        <View {...props} style={combineStyles}  >{children}</View>
    </> )
}