import {Image,StyleSheet} from "react-native";

export const  IconImage=(props)=>{
    const {style}=props;
    let combineStyles=StyleSheet.flatten([ { width: 24, height: 24},style, ])

    return ( <>
        <Image {...props} style={combineStyles} />
    </> )
}







