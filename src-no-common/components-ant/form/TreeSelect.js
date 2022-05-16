
import {Cascader, Input} from 'antd';
import {iranCities} from "../../../data/iranCities";
import {baby, gorLeft, removeWhite} from "../../../public/icons";
import {TouchableOpacity} from "../../../react-native";


export default function TreeSelect(props) {
    let { style,onChange,multiple=false,showSearch=true,searchValue,onSearch,filter,limit,matchInputWidth,render,sort,
        placement='bottomRight',placeholder='انتخاب کنید',allowClear,autoFocus,bordered,clearIcon,changeOnSelect,
        className,defaultValue,disabled,displayRender,dropdownClassName,dropdownRender,expandIcon,expandTrigger,fieldNames,getPopupContainer,
        loadData,maxTagCount,maxTagPlaceholder,notFoundContent,open,options,size="large | middle | small",status="'error' | 'warning'",
        suffixIcon,tagRender,value,onDropdownVisibleChange,removeIcon,dropdownMenuColumnStyle,loadingIcon,


    } = props;


    return (
       <Cascader
           {...props}
           placement={placement}
           multiple={multiple}
           options={iranCities}
           expandIcon={ <img src={gorLeft} width={20} height={20} style={{}}/>}
           onChange={onChange}
           showSearch={showSearch}
           placeholder={placeholder}

       />
    );
}



