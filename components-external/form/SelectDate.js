
import {ConfigProvider, DatePicker,} from 'antd';
import 'moment/locale/fa';
import fa_IR from 'antd/lib/locale/fa_IR';
import { DatePicker as DatePickerJalali, Calendar, JalaliLocaleListener } from "antd-jalali";


export default function SelectDate(props) {
    let { style,onChange,showTime,placement='bottomRight',allowClear,autoFocus,bordered,className,dateRender,disabled,disabledDate,dropdownClassName,
        getPopupContainer,inputReadOnly,locale,mode,nextIcon,open,panelRender,picker,placeholder,popupStyle,prevIcon,size,status,suffixIcon,
        superNextIcon,superPrevIcon,onOpenChange,onPanelChange,
        defaultPickerValue,defaultValue,disabledTime,format,renderExtraFooter,showNow,showTime_defaultValue,showToday,value,onOk,
    } = props;


    return (
        <ConfigProvider locale={fa_IR}  direction="ltr">
            <JalaliLocaleListener/>
            <DatePickerJalali {...props} placement={placement}   />
        </ConfigProvider>
    );
}





