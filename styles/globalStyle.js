import { StyleSheet,} from 'react-native'
import {bgWhite, currentThemeColor, mainColor,} from "../helper/colors";
export const container_css = {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
}


export const input_css=(themeColor) => (
    {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor:themeColor[500],
        borderRadius:8,
        padding: 10,
        color:themeColor[500],
    }
)


export const item_css=(themeColor) =>(
    {
        backgroundColor: themeColor[800],
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        color:themeColor[100]
    }
)
export const link_css=(themeColor) =>(
    {
        color: themeColor[50],
        textAlign: 'center',
        backgroundColor: themeColor[500],
        width:200,
        alignSelf:'center',
        padding:10,
        borderRadius:10,
    }
)


export const text_css = (themeColor)=>(
    {
        textAlign: 'center',
        fontSize: 24,
        margin: 16,
        color:themeColor
    }
)

