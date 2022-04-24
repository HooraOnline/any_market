import { Layout } from 'antd';


/* props desc

 */
export default function Footer(props) {
    let { style,children,
    } = props;


    return (
        <Layout.Footer  {...props}  >{children}</Layout.Footer>
    );
}

/*

*/



