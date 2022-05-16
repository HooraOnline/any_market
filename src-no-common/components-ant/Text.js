
import { Typography } from 'antd';

export default function Text(props) {
    let { style,children,type="secondary|success|warning|danger",disabled=false,mark=false,code=false,keyboard=false,
        underline=false,deletee=false,strong,italic,copyable
    } = props;
    return (
        <Typography.Text  {...props} >{children}</Typography.Text>
    );
}



