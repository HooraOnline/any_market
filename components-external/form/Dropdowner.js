
import {Dropdown, } from 'antd';
export default function Dropdowner(props) {
    let { style,children=<span>no children</span>,
        header='no title',arrow,disabled=false,destroyPopupOnHide=false,getPopupContainer,overlayClassName,overlayStyle,
        placement='bottomLeft',trigger='click|hover|contextMenu',visible=false,onVisibleChange,
    } = props;
    return (
        <Dropdown  overlay={<>{children}</>}>
            <a >
                {header}
            </a>
        </Dropdown>
    );
}



