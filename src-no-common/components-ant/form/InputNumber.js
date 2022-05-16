
import { Input } from 'antd';
import {Tooltip} from "@mui/material";


function formatNumber(value) {
    value += '';
    const list = value.split('.');
    const prefix = list[0].charAt(0) === '-' ? '-' : '';
    let num = prefix ? list[0].slice(1) : list[0];
    let result = '';
    while (num.length > 3) {
        result = `,${num.slice(-3)}${result}`;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

export default function InputNumber(props) {
    let { style,onBlur,placeholder,addonAfter,addonBefore,allowClear,bordered,defaultValue,disabled,id,maxLength,showCount,status,
        prefix,size,suffix,type,value,onPressEnter,onChange
    } = props;

   const onChangeText = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        let valueTemp=value;
        valueTemp = valueTemp.split(',').join('');
        if ((!isNaN(valueTemp) && reg.test(valueTemp)) || valueTemp === '' || valueTemp === '-') {
            props.onChange && props.onChange(valueTemp);
        }
    };



    const formatedValue = value ? ( value !== '-' ? formatNumber(value) : '-') : ('' );
    return (
        <Input
            {...props}
            onChange={onChangeText}
            placeholder="Input a number"
            //maxLength={250}
            value={formatedValue}
        />
    );
}



