import { Layout } from 'antd';


/* props desc

 */
export default function Header(props) {
    let { style,children,
    } = props;


    return (
        <Layout.Header  {...props}  >{children}</Layout.Header>
    );
}

/*

*/



