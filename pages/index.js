import { StyleSheet,  TextInput,FlatList } from 'react-native'
import {useContext, useState} from "react";
import {
    container_css,
    input_css, item_css, link_css,
    text_css,
} from "../styles/globalStyle";
import {View, HView, Text,TouchableOpacity} from "../components-base";
import {ColorContext, DarkModeContext} from "../helper/context";
import {bgWhite, changeCurrentThemeColor, currentThemeColor, darkColor, mainColor} from "../helper/colors";
import Link from 'next/link'
import {Button} from "../components-base/Button";

export default function App(props) {
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState(null);
  const [darkMode,setDarkMode]=useContext(DarkModeContext);
  const [themeColor,setThemeColor]=useContext(ColorContext);
    const styles = StyleSheet.create({
        container: container_css,
        input:input_css(themeColor),
        item:item_css(themeColor) ,
        link: link_css(themeColor),
        textContainer: {
            alignItems: 'center',
            marginTop: 16,
            color: themeColor[800],
        },
        text: text_css(themeColor),
    });
  return (
    <View  style={{flex:1,overflow:'auto'}}>

        <HView style={{ borderWidth:2,borderColor:themeColor[400], margin:24,borderRadius:12,}}>
            <TouchableOpacity
                style={{
                    backgroundColor: themeColor[500],
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 16,
                    borderRadius:10,
                }}

                onPress={()=> {
                    const theme=darkMode?mainColor:darkColor;
                    setThemeColor(theme);
                    changeCurrentThemeColor(theme);
                    setDarkMode(!darkMode);

                }} >
                <Text style={{color:themeColor[50]}} >{darkMode?"Light Mode":"Dark Mode"} </Text>
            </TouchableOpacity>

            {/*<TouchableOpacity  style={{
                backgroundColor: themeColor[600],
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 16,
                    borderRadius:10,
            }}>
                <Text style={{color:themeColor[50]}} >Change Theme</Text>
            </TouchableOpacity>*/}

        </HView>
      <Text accessibilityRole="header" style={ {
          textAlign: 'center',
          fontSize: 24,
          margin: 16,
          color:themeColor[700]
      }}
            darkStyle={{
                color:'green'
            }}
      >
        React Native for Web & Next.js
      </Text>

      <Link href={`/alternate`}>
          <Text style={styles.link} accessibilityRole="link" >
              A universal link
          </Text>
      </Link>

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={{fontSize:30,textAlign: 'center'}}>
          Subheader
        </Text>

      </View>
      <View>
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
        />
        <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="useless placeholder"
            keyboardType="numeric"
        />
           <List/>

      </View>
    </View>
  )
}

const List=()=>{
    const [themeColor]=useContext(ColorContext);
    return(
        <View style={{backgroundColor:themeColor[100],padding:24,margin:24,borderRadius:12}}>
            <FlatList
                data={ [
                    {
                        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                        title: 'First Item',
                    },
                    {
                        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                        title: 'Second Item',
                    },
                    {
                        id: '58694a0f-3da1-471f-bd96-145571e29d72',
                        title: 'Third Item',
                    },
                ]}
                renderItem={({item}) => (
                    <View style={{
                        backgroundColor: themeColor[200],
                        padding: 20,
                        marginVertical: 8,
                        marginHorizontal: 16,
                    }}>
                        <Text style={{
                            alignItems: 'center',
                            fontSize: 24,
                            marginBottom: 24,
                            color:themeColor[700]
                        }} >{item.title}</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}



