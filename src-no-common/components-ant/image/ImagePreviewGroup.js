
import { Image} from 'antd';

export default function ImagePreviewGroup(props) {
    let { style,preview, } = props;

    return (
        <Image.PreviewGroup {...props} />
    );
}



