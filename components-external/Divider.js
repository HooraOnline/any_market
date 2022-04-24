
import { Divider as Divider2 } from 'antd';

export default function Divider(props) {
    let { style,children,className,type='horizontal | vertical',dashed=false,orientation='left | right | center',orientationMargin,plain=true,
    } = props;
    return (
        <Divider2 {...props}/>
    );
}



