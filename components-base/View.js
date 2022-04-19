import {View as View1,StyleSheet} from "react-native";

export const  View=(props)=>{
    const {style,horizontal, children}=props;
    let combineStyles=StyleSheet.flatten([style,  {  flexDirection: horizontal?'row':'column'}])
    return ( <>
        <View1 {...props} style={combineStyles}  >{children}</View1>
    </> )
}

/*const styles = StyleSheet.create({
    min: {
       flexDirection:'row'
    },
})*/





