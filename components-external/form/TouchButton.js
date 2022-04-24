
import {Button, Input} from 'antd';




export default function TouchButton(props) {
    let {children='no caption', style,type="primary |ghost| dashed | link | text| default",block=false,danger=false,disabled=false,ghost=false,href,htmlType='button',
        icon,loading=false,shape='default | circle | round',
        size='large | middle | small',target,onClick
    } = props;


    return (
        <Button {...props} block={block}>{children}</Button>
    );
}



