
import { Input } from 'antd';
import {EyeInvisibleOutlined, EyeTwoTone} from "@ant-design/icons";




export default function InputPassword(props) {
    let { style,addonAfter,addonBefore,allowClear,bordered,defaultValue,disabled,id,maxLength,showCount,status,
        prefix,size,suffix,type,value,onChange,onPressEnter,
    } = props;


    return (
    <Input.Password
        {...props}
        placeholder="input password"
        iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
    />
    );
}



