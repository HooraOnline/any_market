
import { Space as space} from 'antd';




export default function Space(props) {
    let { style,children, align="start | end |center |baseline",
        direction='vertical | horizontal',size='small | middle| large | number',
        split='ReactNode',wrap=false
    } = props;


    return (
        <space  {...props}>{children}</space>
    );
}



