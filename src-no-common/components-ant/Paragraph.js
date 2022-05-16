
import { Typography } from 'antd';
import {SmileFilled, SmileOutlined} from "@ant-design/icons";

export default function Paragraph(props) {
    let { style,children,type="secondary|success|warning|danger",disabled=false,mark=false,code=false,keyboard=false,
        underline=false,deletee=false,strong,italic,copyable
    } = props;
    let style2={textAlign:'justify',...style};
    return (
        <Typography.Paragraph   {...props} style={style2}

        >{children}</Typography.Paragraph>
    );
}



