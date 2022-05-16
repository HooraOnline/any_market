import {TouchableOpacity as TouchableOpacity1} from "react-native";
export const  TouchableOpacity=(props)=>{
    const {children}=props;


    return ( <>
        <TouchableOpacity1 {...props}  >{children}</TouchableOpacity1>
    </> )
}







