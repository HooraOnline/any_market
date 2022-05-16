
import { Layout as layout} from 'antd';
/* props desc

 */
export default function Layout(props) {
    let { style,children,className,hasSider,
    } = props;


    return (
        <layout  {...props}  >{children}</layout>
    );
}

/*

*/



