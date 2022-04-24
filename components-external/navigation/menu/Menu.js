import { Menu as menu } from 'antd';


/* props desc

 */
export default function Menu(props) {
    let { style,children,offsetBottom=0,offsetTop=0,target,onChange

    } = props;


    return (
        <menu  {...props}  >{children}</menu>
    );
}





