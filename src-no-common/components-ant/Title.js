
import { Typography } from 'antd';

export default function Title(props) {
    let { style,children,level=1,type="secondary|success|warning|danger",disabled=false,mark=false,code=false,keyboard=false,
        underline=false,deletee=false,strong,italic,
    } = props;
    return (
        <Typography.Title {...props} >{children}</Typography.Title>
    );
}



