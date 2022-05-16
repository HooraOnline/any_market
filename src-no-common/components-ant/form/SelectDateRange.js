
import {ConfigProvider,} from 'antd';
import 'moment/locale/fa';
import fa_IR from 'antd/lib/locale/fa_IR';
import { DatePicker as DatePickerJalali, JalaliLocaleListener } from "antd-jalali";


export default function SelectDateRange(props) {
    let { style,onChange,showTime,placement='bottomRight',allowClear,autoFocus,bordered,className,dateRender,disabled,disabledDate,dropdownClassName,
        getPopupContainer,inputReadOnly,locale,mode,nextIcon,open,panelRender,picker,placeholder,popupStyle,prevIcon,size,status,suffixIcon,
        superNextIcon,superPrevIcon,onOpenChange,onPanelChange,
        allowEmpty,defaultPickerValue,defaultValue,disabledTime,format,ranges,renderExtraFooter,separator,showTime_defaultValue,
        value,onCalendarChange,
    } = props;


    return (
        <div className="App">
            <ConfigProvider locale={fa_IR}  direction="rtl">
                <JalaliLocaleListener/>
                <DatePickerJalali.RangePicker {...props} />
            </ConfigProvider>
        </div>
    );
}



