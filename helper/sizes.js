import {Dimensions, PixelRatio, Platform,} from "react-native-web";
export const deviceSizes = {
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,

};
export const window=Dimensions.get('window');
export const isLargDevice = Dimensions.get('window').width>768;
export const isSmallDevice = Dimensions.get('window').width>768;
/*export const isSmallDevice = Dimensions.get('window').width<480;
export const isMediumDevice = Dimensions.get('window').width<768 && Dimensions.get('window').width>480;
export const isLargDevice =  Dimensions.get('window').width<992 && Dimensions.get('window').width>768;
export const isVeryLargDevice = Dimensions.get('window').width>1280;*/


export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const calcHeight = x => PixelRatio.roundToNearestPixel((deviceHeight * x) / 100)
export const calcWidth = x => PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);

export const isAndroid=Platform.OS === 'android.';
export const isIos=Platform.OS === 'ios';
export const isMobile=Platform.OS !== 'web';
export const isWeb=Platform.OS === 'web';
export const isLandscape=deviceWidth>deviceHeight;

export const isIphoneX = () => {
    const dimen = Dimensions.get('window')
    return (
        Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS &&
        (dimen.height === 812 || dimen.width === 812 || (dimen.height === 896 || dimen.width === 896))
    )
}

export function getOrientation(window) {
    return (deviceWidth < deviceHeight) ? 'portrait' : 'landscape'
}

const wscale = deviceWidth / 375;
const hscale = deviceHeight / 812;

export function normalize(size, based = 'width') {
    const newSize = based === 'height' ? size * hscale : size * wscale;
    if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

export function getFontSizeByWindowWidth(window, fontSize) {
    const baseWidth = 320; // width of smallest iPhone
    const width = (getOrientation(window) == 'portrait') ? window.width : window.height
    return PixelRatio.roundToNearestPixel(fontSize * (width / baseWidth));
}

export const fontSize12 = getFontSizeByWindowWidth(window, 12);
export const fontSize14 = getFontSizeByWindowWidth(window, 14);
export const fontSize16 = getFontSizeByWindowWidth(window, 16);
export const fontSize18 = getFontSizeByWindowWidth(window, 18);
export const fontSize24 = getFontSizeByWindowWidth(window, 24);



export const styleSizes={
    "2xs": 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
    "7xl": 72,
    "8xl": 96,
    "9xl": 128,
    percent1:'1%',
    percent2:'3%',
    percent3:'5%',
    percent4:'10%',
    percent5:'20%',
    percent6:'50%',
}

export const radius={
    2: 2,
    4: 4,
    6: 6,
    8: 8,
    12: 12,
    16: 16,
    circle: '50%',
    full: 150,
}
export const opacity = {
    0: 0,
    5: 0.05,
    10: 0.1,
    20: 0.2,
    25: 0.25,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    75: 0.75,
    80: 0.8,
    90: 0.9,
    95: 0.95,
    100: 1,
};


export const shadow= {
    0: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    1: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    2: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    3: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    4: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    5: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    6: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    7: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    8: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    9: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
};
//**********typography*********
export const  fonts= {
    heading: undefined,
    body: undefined,
    mono: undefined,
}
export const  fontSizes= {
    "2xs": 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
    "6xl": 60,
    "7xl": 72,
    "8xl": 96,
    "9xl": 128,
}
export const  letterSpacings= {
    xs: "-0.05em",
    sm: "-0.025em",
    md: 0,
    lg: "0.025em",
    xl: "0.05em",
    "2xl": "0.1em",
}

export const  lineHeights= {
    "2xs": "1em",
    xs: "1.125em",
    sm: "1.25em",
    md: "1.375em",
    lg: "1.5em",
    xl: "1.75em",
    "2xl": "2em",
    "3xl": "2.5em",
    "4xl": "3em",
    "5xl": "4em",
}
export const  fontWeights= {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
    extrablack: 950,
}




