
import { Input } from 'antd';




export default function InputText(props) {
    let { style,placeholder,addonAfter,addonBefore,allowClear,bordered,defaultValue,disabled,id,maxLength,showCount,status,
        prefix,size,suffix,type,value,onChange,onPressEnter,
    } = props;


    return (
        <Input {...props}  />
    );
}



