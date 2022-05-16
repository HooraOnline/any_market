
import { Col as Column} from 'antd';
/* props desc

 */
export default function Col(props) {
    let { style,children,flex='string | number',
        span='number',xs='number | object',
        offset=0,order=0,pull=0,push=0,
        sm,md,lg,xl,xxl,//use for responsive design
    } = props;


    return (
        <Column  {...props}>{children}</Column>
    );
}

/*
 xs < 576px
 sm > 576px
 md > 768px
 lg > 992px
 xl > 1200px
 xxl > 1600px
responcive grid example for size xs md xl
<Row>
    <Col xs={24} md={24} xl={6}>
        One of three columns
    </Col>
    <Col xs={24} md={24} xl={6}>
        One of three columns
    </Col>
    <Col xs={24} md={12} xl={6} >
        One of three columns
    </Col>
    <Col xs={24} md={12} xl={6}>
        One of three columns
    </Col>
 </Row>
*/



