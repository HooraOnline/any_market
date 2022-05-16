import { Menu } from 'antd';


/* props desc

 */
export default function MenuItemGroup (props) {
    let { style,children,offsetBottom=0,offsetTop=0,target,onChange

    } = props;


    return (
        <Menu.ItemGroup   {...props}  >{children}</Menu.ItemGroup >
    );
}





