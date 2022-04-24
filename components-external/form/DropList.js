
import {Dropdown, Menu, Tooltip,} from 'antd';
import {DownOutlined} from "@ant-design/icons";
import {cloneElement} from "react";
export default function DropList(props) {
    let { style,items=[1,2,3],
        buttonsRender=([leftButton, rightButton]) => [
        <Tooltip title="tooltip" key="leftButton">
            {leftButton}
        </Tooltip>,
        cloneElement(rightButton, { loading: false }),
    ],
        loading,disabled,icon,overlay,placement='bottomLeft',trigger='click|hover|contextMenu',
        type,visible,onClick,onVisibleChange,
    } = props;
    return (
        <Dropdown.Button
            buttonsRender={buttonsRender}
            placement="bottomRight"
            icon={<DownOutlined />}
            //loading={loadings[1]}
            overlay={<div>
                {items.map((i,index)=>(
                    <Menu placement="bottomRight">
                        <Menu.Item key={index}>{'Dropdown'+index}</Menu.Item>
                    </Menu>
                ))}
            </div>}
            //onClick={() => this.enterLoading(1)}
        >
           انتخاب کنید.
        </Dropdown.Button>
    );
}



