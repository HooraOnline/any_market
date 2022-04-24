
import { Row as Row2} from 'antd';


/* props desc
 gutter:Spacing between grids, could be a number or a object like { xs: 8, sm: 16, md: 24}.
 Or you can use array to make horizontal and vertical spacing work at the same time [horizontal, vertical]
 */
export default function Row(props) {
    let { style,children,align="top* | middle | bottom",gutter='number*=1 | object | array',justify='start* | end | center | space-around | space-between',
        wrap=true,
    } = props;


    return (
        <Row2  {...props}  >{children}</Row2>
    );
}





