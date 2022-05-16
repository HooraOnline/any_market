import Head from "next/head";
import {useEffect, useLayoutEffect, useState} from "react";
import {Keyboard, useWindowDimensions, View,StyleSheet} from "react-native-web";
import {deviceWidth} from "../helpers/responsive";



export default function Layout({ style,children,onInit,
                                   onShowKeyboard,onHideKeyboard,
                                   title="انی مارکت"} ) {

    const [sWidth, setScreenWidth] = useState(300);
    const { height, width } = useWindowDimensions();

    useEffect(() => {

        //https://reactnative.dev/docs/dimensions
        /*const subscription = Dimensions.addEventListener(
            "change",
            ({ window, screen }) => {
                setDimensions({ window, screen });
            }
        );
        return () => subscription?.remove();*/
    }, []);

    useEffect(() => {
       /* const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
            onShowKeyboard && onShowKeyboard();
        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
            onShowKeyboard && onHideKeyboard();
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };*/
    }, []);

    useLayoutEffect(() => {
       /* globall.width=window.innerWidth;
        globall.height=window.innerHeight;
        function handleResize() {
            globall.width=window.innerWidth;
            globall.height=window.innerHeight;
            setScreenWidth(window.innerWidth);
            onInit && onInit(window.innerWidth)
        }
        setScreenWidth(window.innerWidth);
        onInit && onInit(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);*/

    },[]);
    const handleLayout = event => {
        const { nativeEvent: { layout: { width, height } } } = event;

        //setWidth(width)
        //setHeight(height)
    };

    //like media query
    const headermediaQueryStyle = [styles.container, (deviceWidth <700) && tablet.container];

    return (
        <div dir={'rtl'}  style={style}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="انی مارکت، سامانه بازاریابی " />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" lang={'fa'}/>
                <meta name="theme-color" content="#ff6600"/>
                <meta name="description" content={ 'انی مارکت، سامانه بازاریابی'}/>
                <link rel="shortcut icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" href="/favicon.ico"/>
                <link rel="apple-touch-icon" href="/favicon.ico"/>
                <link rel="manifest" href="/manifest.webmanifest"/>

                <meta name="apple-mobile-web-app-title" content="anyMarket"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="mobile-web-app-capable" content="yes"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />

                <meta name="theme-color" content="#000000" />
                <link rel="shortcut icon" href={"/favicon.ico"} />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href={"/favicon.ico"}
                />
            </Head>
            <View style={headermediaQueryStyle}
                  //onLayout={handleLayout}
            >
                {children}
            </View>


        </div>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        flex: 1,
    },
    content: {
        flex: 4,
    },
});

const tablet = StyleSheet.create({
    container: {
      // backgroundColor:'red'
    }
});


