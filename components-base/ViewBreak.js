import {View,StyleSheet} from "react-native";
import {useWindowDimensions} from "react-native-web";
import {deviceSizes, deviceWidth, isSmallDevice} from "../helper/sizes";

export const  ViewBreak=(props)=>{
    const {style, children,breakpoint=deviceSizes.md}=props;
    const {width, height} = useWindowDimensions();
    let combineStyles=StyleSheet.flatten([style,  {  flexDirection:deviceWidth<breakpoint?'column':'row' }]);
    return ( <>
        <View {...props} style={combineStyles}  >{children}</View>
    </> )
}