import { StyleSheet,  View,FlatList,Dimensions,Share,Progress  } from 'react-native'
import {
    HView,
    Text,
    TouchableOpacity,
    Button,
    NavigateLink,
    Wrap,
    IconImage,
    TextInput,
    NumberInput,

} from "../src/components";
import {Component, useContext, useState} from "react";
import {
    container_css,
    input_css, item_css, link_css,
    text_css,
} from "../styles/globalStyle";

import {ColorContext, DarkModeContext} from "../src/helpers/context";
import {
    bgWhite,
    blueColors,
    changeCurrentTheme,
    currentColors,
    darkColors, greenColors,
    mainColors, purple2Colors, purpleColors, redColors
} from "../src/helpers/colors";
import {
    ActivityIndicator,
    Image, ImageBackground,
    Keyboard,
    KeyboardAvoidingView, Modal, Picker,
    Platform, Pressable, ProgressBar, ScrollView, StatusBar,
    Switch, TouchableHighlight,
    TouchableWithoutFeedback, useColorScheme,
} from "react-native-web";
import {logo, search} from "../src/helpers/icons";
import Layout from "../src/components/Layout";
import {sellers, vector1, vector2, vector4, vector5, vector6} from "../src/helpers/images";
import useToggle from "../src/hooks/useToggle";
import {isModeling} from "../public/images";
import FaidAnimatet from "../src/components/animation/FaidAnimatet";
import AlertShow from "../src/components/modal/Alert";
import AnimatedImage from "../src/components/animation/AnimatedImage";
import AnimatedTiming from "../src/components/animation/AnimatedTiming";
import AnimatedSpring from "../src/components/animation/AnimatedSpring";
import AnimatedParallel from "../src/components/animation/AnimatedParallel";
import AnimatedSequence from "../src/components/animation/AnimatedSequence";
import AnimatedStagger from "../src/components/animation/AnimatedStagger";
import AnimatedEasing from "../src/components/animation/AnimatedEasing";
import AnimatedInteraction from "../src/components/animation/AnimatedInteraction";
import PanResponder from "../src/components/animation/PanResponder";
import PanResponder1 from "../src/components/animation/PanResponder";
import Transforms from "../src/components/temp/Transforms";
import BackHandler1 from "../src/components/temp/BackHandler";
import MediaQuery, {useMediaQuery} from "react-responsive";
import CategoryList from "../src/components-page/CategoryList";
import Users from "../src/components-page/Users";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;




export default function App(props) {
  const [text, onChangeText] = useState("TextInput");
  const [number, onChangeNumber] = useState(null);
  const [themeColor,setThemeColor]=useContext(ColorContext);
    const [colorScheme,setColorScheme] = useColorScheme();
    const [checked, toggle]=useToggle(true);
    const [selectedValue, setSelectedValue] = useState("java");
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
      container2: {
          flex: 1,
          justifyContent: "center"
      },

      horizontal: {
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10
      },
        inner: {
            padding: 24,
            flex: 1,
            justifyContent: "space-around"
        },
        header: {
            fontSize: 36,
            marginBottom: 48
        },
        textInput: {
            height: 40,
            borderColor: "#000000",
            borderBottomWidth: 1,
            marginBottom: 36
        },
        btnContainer: {
            backgroundColor: "white",
            marginTop: 12
        }
    });
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Anymarket | A framework for level marketing',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
  return (
      <Layout>
          <View  style={{flex:1,overflow:'auto'}}>
              <ThemeBox/>
              <Users/>
              <CategoryList/>
              <MediaQueryBox/>
              <View style={{margin:10}}>
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
                      Some AnyMarket Components
                  </Text>
                  <Wrap style={{flex:1, alignItems:'center',padding:16,margin:16, borderWidth:2,borderColor:themeColor[500],borderRadius:12,}}>
                      <Text accessibilityRole="header" style={ {
                          textAlign: 'center',
                          fontSize: 34,
                          margin: 16,
                          color:themeColor[600]
                      }}
                            darkStyle={{
                                color:'green'
                            }}
                      >
                          I am Title
                      </Text>
                      <Text accessibilityRole="header" aria-level="2"
                            style={{fontSize:20,textAlign: 'center',padding:10,color:themeColor[500]}}>
                          I am Text
                      </Text>
                      <Button onPress={()=>alert('you clicked')}
                              title={"I am Button"}
                          //disabled={true}
                              accessibilityLabel={"FirsName"}
                              style={{paddingHorizontal:20,margin:10}}/>
                      <NavigateLink href={"/alternate"}>
                          <Text style={styles.link} accessibilityRole="link" >
                              navigate link
                          </Text>
                      </NavigateLink>
                      <TextInput
                          style={styles.input}
                          onChangeText={onChangeText}
                          value={text}
                      />
                      <NumberInput
                          style={styles.input}
                          onChangeText={onChangeNumber}
                          value={number}
                          placeholder="Numeric input"
                          keyboardType="numeric"
                      />

                      <View onLayout={(event) => {
                          let {x, y, width, height} = event.nativeEvent.layout;

                      }} style={styles.container}>

                          <Picker
                              dialog={'dialog'}
                              selectedValue={selectedValue}
                              style={{ height: 50, width: 150 }}
                              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                          >
                              <Picker.Item label="Java" value="java" />
                              <Picker.Item label="JavaScript" value="js" />
                          </Picker>

                      </View>

                      <ProgressBar  progress={0.3} width={200} style={{backgroundColor:'red'}} />

                      <ActivityIndicator size="large" color={themeColor[500]} />
                      <Image
                          style={{width:150,height:150,margin:10}}
                          source={isModeling}
                      />

                      <IconImage
                          style={{margin:10}}
                          source={search}
                          tintColor={'red'}
                      />

                      <div dir={'ltr'}>
                          <Switch
                              trackColor={{ false: "#767577", true: themeColor[200] }}
                              thumbColor={checked ? themeColor[500] : "#f4f3f4"}
                              ios_backgroundColor="#3e3e3e"
                              onValueChange={toggle}
                              value={checked}
                          />
                      </div>

                      <KeyboardAvoidingView
                          behavior={Platform.OS === "ios" ? "padding" : "height"}
                          style={styles.container}
                      >
                          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                              <View style={styles.inner}>
                                  <Text >حل مشکل هاید شدن فرم پشت کیبورد در موبایل</Text>
                                  <TextInput placeholder="Username" style={styles.textInput} />
                              </View>
                          </TouchableWithoutFeedback>
                      </KeyboardAvoidingView>

                      <ImageBackground source={sellers} resizeMode="cover" style={{width:300,height:100}}>
                          <Text style={{color:bgWhite,fontSize:30}}>
                              Image background

                          </Text>
                          <NumberInput
                              style={styles.input}
                              onChangeText={onChangeNumber}
                              value={number}
                              placeholder="Numeric input"
                              keyboardType="numeric"
                          />
                      </ImageBackground>

                      <MyModal/>
                      <List/>
                      <Pressable onLongPress={()=>alert("LongPress")}>
                          <View
                              style={{
                                  backgroundColor: themeColor[500],
                                  padding: 20,
                                  marginVertical: 8,
                                  marginHorizontal: 16,
                                  borderRadius:10,
                              }}

                              onLongPress={()=>alert("you do Long Press")} >
                              <Text style={{color:darkColors[900]}} > LongPress  </Text>
                          </View>
                      </Pressable>

                      <ScrollView style={{
                          backgroundColor: themeColor[100],
                          marginHorizontal: 20,
                          height:150,
                          width:250,
                      }}>
                          <Text style={{fontSize:20,padding:20}}>
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                              ScrollView
                          </Text>
                      </ScrollView>
                      <TouchableHighlight
                          activeOpacity={0.8}
                          underlayColor="#000000"
                          onPress={() => alert('Pressed!')}
                           >
                          <View {...props} style={{ flex: 1, backgroundColor: '#fff',padding:10,borderColor:'#ddd',borderWidth:1 }}>
                              <Text>TouchableHighlight</Text>
                          </View>
                      </TouchableHighlight>


                  </Wrap>
              </View>
              <View style={{margin:10}}>
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
                      Animation components
                  </Text>
                  <Wrap style={{flex:1, alignItems:'center',padding:16,margin:16, borderWidth:2,borderColor:themeColor[500],borderRadius:12,}}>
                      <View style={{minWidth:400}}>
                          <FaidAnimatet/>
                      </View>
                      <View style={{minWidth:400}}>
                          <AnimatedImage/>
                      </View>
                      <View style={{minWidth:400}}>
                          <AnimatedTiming/>
                      </View>
                      <View style={{minWidth:400}}>
                          <AnimatedSpring/>
                      </View>
                      <View style={{minWidth:400}}>
                          <AnimatedParallel/>
                      </View>
                      <View style={{width:400}}>
                          <AnimatedSequence/>
                      </View>
                      <View style={{width:400}}>
                          <AnimatedStagger/>
                      </View>
                      <View style={{minWidth:400}}>
                          <AnimatedEasing/>
                      </View>
                      <View style={{minWidth:400,
                          padding: 16,

                      }}>
                          <AnimatedInteraction/>
                      </View>

                  </Wrap>
              </View>

              <View style={{margin:10}}>
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
                      Advance components
                  </Text>
                  <Wrap style={{flex:1, alignItems:'center',padding:16,margin:16, borderWidth:2,borderColor:themeColor[500],borderRadius:12,}}>
                      <View style={{minWidth:400,
                          padding: 30,
                          ...Platform.select({
                              ios: {

                                  backgroundColor:'blue'

                              },
                              android: {
                                  backgroundColor:'green'
                              },
                              web: {
                                  backgroundColor:'red'
                              },
                              default: { backgroundColor: 'black' }
                          })
                      }}>
                          <Text style={{color:bgWhite}}>styleing by platform. difrent color in android, ios & web</Text>
                      </View>
                      <Button style={{margin:16}} onPress={onShare} title="Share" />
                      <Transforms/>
                      <BackHandler1/>





                  </Wrap>
              </View>
          </View>
      </Layout>

  )
}

const MediaQueryBox=()=>{
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return <View style={{alignSelf: 'center'}}>
        <h1>Device Test By Media query!</h1>
        {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
        {isBigScreen && <p>You  have a huge screen</p>}
        {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
        <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
        {isRetina && <p>You are retina</p>}

        <MediaQuery minWidth={1224}>
            <p>You are a desktop or laptop</p>
            <MediaQuery minWidth={1824}>
                <p>You also have a huge screen</p>
            </MediaQuery>
        </MediaQuery>
        <MediaQuery minResolution="2dppx">
            {/* You can also use a function (render prop) as a child */}
            {(matches) =>
                matches
                    ? <p>You are retina</p>
                    : <p>You are not retina</p>
            }
        </MediaQuery>
    </View>
}

const ThemeBox=()=>{
    const [darkMode,setDarkMode]=useContext(DarkModeContext);
    const [themeColor,setThemeColor]=useContext(ColorContext);
    return(
        <Wrap style={{ borderWidth:2,borderColor:themeColor[400], margin:24,borderRadius:12,}}>
            <TouchableOpacity
                style={{
                    backgroundColor: darkColors[200],
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 16,
                    borderRadius:10,
                }}

                onPress={()=> {
                    const theme=darkMode?mainColors:darkColors;
                    setThemeColor(theme);
                    changeCurrentTheme(theme);
                    setDarkMode(!darkMode);

                }} >
                <Text style={{color:darkColors[900]}} >{darkMode?"Light Mode":"Dark Mode"} </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: blueColors[500],
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 16,
                    borderRadius:10,
                }}

                onPress={()=> {
                    setThemeColor(blueColors);
                    changeCurrentTheme(blueColors);
                    setDarkMode(false);

                }} >
                <Text style={{color:blueColors[50]}} >{"Blue theme"} </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: redColors[500],
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 16,
                    borderRadius:10,
                }}

                onPress={()=> {
                    setThemeColor(redColors);
                    changeCurrentTheme(redColors);
                    setDarkMode(false);

                }} >
                <Text style={{color:redColors[50]}} >{"Red theme"} </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: greenColors[500],
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 16,
                    borderRadius:10,
                }}

                onPress={()=> {
                    setThemeColor(greenColors);
                    changeCurrentTheme(greenColors);
                    setDarkMode(false);

                }} >
                <Text style={{color:redColors[50]}} >{"Green theme"} </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    backgroundColor: purple2Colors[500],
                    padding: 20,
                    marginVertical: 8,
                    marginHorizontal: 16,
                    borderRadius:10,
                }}

                onPress={()=> {
                    setThemeColor(purple2Colors);
                    changeCurrentTheme(purple2Colors);
                    setDarkMode(false);

                }} >
                <Text style={{color:purple2Colors[50]}} >{"Purple theme"} </Text>
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


        </Wrap>
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

const MyModal=()=>{
    const [modalVisible, setModalVisible] = useState(false);

    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,

        },
        modalView: {
            margin: 20,
            width:screenWidth-50,
            height:screenHeight-50,
            backgroundColor: currentColors[50],
            borderRadius: 20,
            padding: 30,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2
        },
        buttonOpen: {
            backgroundColor: currentColors[400],
        },
        buttonClose: {
            backgroundColor: "#2196F3",
        },
        textStyle: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
        },
        modalText: {
            marginBottom: 15,
            textAlign: "center"
        }
    });
    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onDismiss={() => {
                   // Alert.alert("Modal has been closed.");
                    //setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
        </View>
    )
}



