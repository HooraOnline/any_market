export default function Div(props) {
    let {style={}, className} = props;
    let style2=Object.assign({},style);
    style2.display='flex';
    style2.flexDirection=(style2.flexDirection || 'column');
    return (
        <div {...props}  style={style2} />
    );
}



