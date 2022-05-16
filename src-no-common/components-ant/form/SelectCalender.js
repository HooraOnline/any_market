
import {ConfigProvider} from 'antd';
import 'moment/locale/fa';
import locale from 'antd/lib/locale/fa_IR';
import { Calendar, JalaliLocaleListener } from "antd-jalali";

/*https://www.npmjs.com/package/antd-jalali*/
export default function SelectCalender(props) {
    let { style,onChange,
    } = props;


    return (
        <ConfigProvider locale={locale}  direction="rtl">
            <JalaliLocaleListener/>
            <Calendar {...props}  />
        </ConfigProvider>
    );
}



