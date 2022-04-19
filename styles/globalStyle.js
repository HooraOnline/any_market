import { StyleSheet,} from 'react-native'
import {bgWhite, currentThemeColor, mainColor,} from "../helper/colors";
export const container_css = {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
}


export const input_css = {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor:currentThemeColor[600],
    borderRadius:8,
    padding: 10,
    color:mainColor[100],
}


export const item_css = {
    backgroundColor: currentThemeColor[800],
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    color:currentThemeColor[100]
}


export const text_css = {
    textAlign: 'center',
    fontSize: 24,
    margin: 16,
    color:mainColor[600]
}

