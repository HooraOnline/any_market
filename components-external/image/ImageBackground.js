
import {useState} from "react";

export default function ImageBackground(props) {
    let {src,style} = props;
    let styles = {
        main0: {
            position: 'relative',
            "background-image":`url(${src})`,
            /*"background-repeat": 'no-repeat',*/
            /*"background-size": '100% 100%',*/
            width: '100%',
            backgroundColor: '#00',
            opacity: 0.8,
            ...style,

        },
        main: {
            width: '100%',display: 'flex', flex:1,

        },
        img: {
            width: '100%',
        },
    }




    return(
        <div    {...props}  style={styles.main0} >
            {/*<img
                src={source}
                className={classes.img}
                style={style}
                onError={(e)=>{
                    setSource1(props.noImage)
                    props.onError && props.onError(setSource1)
                } }
                onLoad={()=>{
                    setSource1(source)
                }
                }
            />*/}
            <div style={{position: 'absolute', left:0,right:0,top:0,bottom:0}}>
                {props.children}
            </div>

        </div>


    )

}










// import View from "./View";
// import {makeStyles} from "@material-ui/core/styles";
// import images from "../../public/static/assets/images";


// export default function ImageBackground(props) {
//     let {style={},imageStyle,source,resizeMode,blurRadius} = props;

//     const styles = {
//         main: {
//             "background-image":`url(${props.source})`,
//             "background-repeat": 'no-repeat',
//             "background-size": '100% 100%',
//             filter:`blur(${blurRadius}px)`,  // grayscale(10%) brightness(100%) contrast(100%) invert(10%),
//             opacity:1,
//         },
//         img: {

//         },
//     }
//     const useStyles = makeStyles(styles);
//     const classes = useStyles();
//     return (

//         <View style={{...style,position:'relative',alignItems:'center',justifyContent:'center'}}>
//              <div  {...props} style={{ width: '100%',...style}}  className={classes.main}/>
//              <div style={{position:'absolute',top:0,bottom:0,left:0,right:0,alignSelf:'center',zIndex:2}}>{props.children}</div>
//              {blurRadius &&(
//                   <img  src={props.source}  style={{height:'100%',width:undefined,  objectFit: 'contain',position:'absolute',top:0,bottom:0,alignSelf:'center',...imageStyle}}/>
//              )
//              }
//         </View>

//     );
// }





// import View from "./View";
// import {makeStyles} from "@material-ui/core/styles";
// import images from "../../public/static/assets/images";

// export default function ImageBackground(props) {
//     let {style={},source,resizeMode,blure} = props;

//     const styles = {
//         main: {
//             "background-image":`url(${props.source})`,
//             "background-repeat": 'no-repeat',
//             "background-size": '100% 100%',


//         },
//         img: {



//         },
//     }
//     const useStyles = makeStyles(styles);
//     const classes = useStyles();
//     return (
//         <View  {...props}  style={{...style,}} className={classes.main}>
//             {style.backgroundColor?(
//                 <img  src={props.source}  style={{...style,height:'100%',width:undefined,  objectFit: 'contain',}}/>
//             ):props.children

//             }
//         </View>
//     );
// }





