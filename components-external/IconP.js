
import {Button, Input} from 'antd';
import Icon, {StarOutlined, StarTwoTone} from "@ant-design/icons";




export default function IconP(props) {
    let {style={}, icon=StarOutlined,className,rotate=90,spin=false,twoToneColor,color,size=24,
    } = props;

    style.color=style.color || color;
    style.fontSize=style.fontSize || size;
    return (
       <Icon {...props} component={icon}/>
    );
}



