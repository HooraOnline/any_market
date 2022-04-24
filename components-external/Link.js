
import { Typography } from 'antd';

export default function Link(props) {
    let { style,children,href,target,type="secondary|success|warning|danger",disabled=false,mark=false,code=false,keyboard=false,
        underline=false,deletee=false,strong,italic,
    } = props;
    return (
        <Typography.Link {...props} delete  >{children}</Typography.Link>
    );
}



