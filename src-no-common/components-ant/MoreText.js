
import { Typography } from 'antd';
import {useState} from "react";

export default function MoreText(props) {
    let { style,children,ellipsis=true, disabled=false,mark=false,code=false,keyboard=false,
        underline=false,deletee=false,strong,italic,copyable,maxLine=2
    } = props;
    const [ellips, setEllips] = useState(false);
    return (
        <Typography.Paragraph
            {...props}
            ellipsis={{ rows: maxLine, expandable: true, symbol: 'بیشتر' }}

        >{children}</Typography.Paragraph>
    );
}



