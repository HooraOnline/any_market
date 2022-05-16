import { Layout } from 'antd';


/* props desc

 */
export default function Sider(props) {
    let { style,children,
    } = props;


    return (
        <Layout.Sider  {...props}  >{children}</Layout.Sider>
    );
}

/*

*/



