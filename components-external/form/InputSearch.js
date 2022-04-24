
import { Input } from 'antd';




export default function InputSearch(props) {
    let { style,placeholder='جستجو',addonAfter,addonBefore,allowClear,bordered,defaultValue,disabled,id,maxLength,showCount,status,
        prefix,size,suffix,type,value,onChange,onPressEnter,
        onSearch = value => console.log(value)
    } = props;


    return (
      <Input.Search {...props} placeholder={placeholder} allowClear onSearch={onSearch}  />
    );
}



