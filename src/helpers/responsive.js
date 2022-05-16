import {Dimensions, PixelRatio, Platform,} from "react-native-web";
import {useMediaQuery} from "react-responsive";
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



//Media query
/*const Example = () => (
    <div>
        <Desktop>Desktop or laptop</Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>Mobile</Mobile>
        <Default>Not mobile (desktop or laptop or tablet)</Default>
    </div>
)*/
export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
export const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}
export const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}
export const useDesktopMediaQuery = () =>
    useMediaQuery({ query: "(min-width: 1280px)" })

const useTabletAndBelowMediaQuery = () =>
    useMediaQuery({ query: "(max-width: 1279px)" })

export const TabletAndBelow = ({ children }) => {
    const isTabletAndBelow = useTabletAndBelowMediaQuery()

    return isTabletAndBelow ? children : null
}