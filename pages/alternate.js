import { StyleSheet} from 'react-native'
import {changeCurrentTheme, darkColors, mainColors} from "../src/helpers/colors";
import Link from 'next/link'
import {useContext, useState} from "react";
import {ColorContext, DarkModeContext} from "../src/helpers/context";

import {Text, TouchableOpacity} from "../src/components";
import {View} from "react-native-web";

export default function Alternate() {
  const [darkMode,setDarkMode]=useContext(DarkModeContext);
  const [themeColor,setThemeColor]=useContext(ColorContext);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=> {
        const theme=darkMode?mainColors:darkColors;
        setThemeColor(theme);
        changeCurrentTheme(theme);
        setDarkMode(!darkMode);
      }} style={{
        backgroundColor: themeColor[500],
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }}>
        <Text style={{color:themeColor[50]}} >{darkMode?"Light":"Dark"} </Text>
      </TouchableOpacity>
      <Text accessibilityRole="header" style={styles.text}>
        Alternate Page
      </Text>

      <Link  href={`/`}>
        <Text accessibilityRole="link" style={styles.link} >
          Go Back
        </Text>
      </Link>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: 'blue',
  },
})
