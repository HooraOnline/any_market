import {TouchableOpacity} from "./TouchableOpacity";
import {currentColors, mainColors} from "../helpers/colors";
import {StyleSheet} from "react-native";
import {Text} from "./Text";

export const  Button=(props)=>{
    const {children,style,title}=props;
    let combineStyles=StyleSheet.flatten([{
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:currentColors[500],
        padding:10,
        paddingHorizontal:20,
        borderRadius:8,
        height:'fit-content',
        width:'fit-content',
    },style,  ])

    return ( <>
        <TouchableOpacity {...props} style={combineStyles}  >
            <Text style={{color:mainColors[50],}}>{title}</Text>
            {children}
        </TouchableOpacity>
    </> )
}







