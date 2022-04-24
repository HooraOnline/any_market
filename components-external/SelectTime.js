
import {ConfigProvider, TimePicker,} from 'antd';
import 'moment/locale/fa';
import locale from 'antd/lib/locale/fa_IR';
import {DatePicker as DatePickerJalali, JalaliLocaleListener} from "antd-jalali";
export default function SelectTime(props) {
    let { style,onChange,
    } = props;


    return (
        <div dir={'ltr'}>
            <ConfigProvider locale={locale}  direction="rtl">
                <TimePicker {...props} />
            </ConfigProvider>
        </div>

    );
}



