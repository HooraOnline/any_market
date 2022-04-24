
import { Input } from 'antd';




export default function InputTextArea(props) {
    let { style,addonAfter,addonBefore,allowClear,bordered,defaultValue,disabled,id,maxLength,showCount,status,
            prefix,size,suffix,type,value,onChange,onPressEnter,
        rows=4,autoSize,onResize} = props;


    return (
        <Input.TextArea {...props} />
    );
}



