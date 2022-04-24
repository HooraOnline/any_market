
import Link from "next/link";
export default function LinkButtom(props) {
    let { onPress, disabled,stopPropagation} = props;

    let style= {
        display:'flex',
        cursor: 'pointer',
        //color:bgWhite,
        //backgroundColor:mainColor,
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:8,
        paddingRight:13,
        paddingLeft:13,
        //width:150,
        ...props.style
    };
    return (
        <div {...props} style={style} >
            <Link href={props.href} ><div style={{display:'flex',flexDirection:style.flexDirection,width:'100%',alignItems: 'center',justifyContent: 'center'}}>{props.children}</div></Link>
        </div>


    );
}



