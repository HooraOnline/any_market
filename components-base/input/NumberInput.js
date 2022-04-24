import {TextInput} from "./TextInput";

export const  NumberInput=(props)=>{
    const {style,darkStyle={color:'#fff'},onKeyPress}=props;

    return ( <>
        <TextInput {...props}
                   onKeyPress={(event) => {
                       if (!/[0-9]/.test(event.key) && event.key!=='Backspace' &&  event.key!=='Delete') {
                           event.preventDefault();
                       }
                       onKeyPress && onKeyPress(event);
                   }}
        />
    </> )
}







