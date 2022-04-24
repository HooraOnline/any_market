import { Menu } from 'antd';


/* props desc

 */
export default function SubMenu (props) {
    let { style,children,offsetBottom=0,offsetTop=0,target,onChange

    } = props;


    return (
        <Menu.SubMenu   {...props}  >{children}</Menu.SubMenu >
    );
}





