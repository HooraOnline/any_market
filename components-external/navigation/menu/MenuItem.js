import { Menu } from 'antd';


/* props desc

 */
export default function MenuItem(props) {
    let { style,children,offsetBottom=0,offsetTop=0,target,onChange

    } = props;


    return (
        <Menu.Item  {...props}  >{children}</Menu.Item>
    );
}





