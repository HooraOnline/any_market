
import { Typography } from 'antd';
import {useState} from "react";
import {EditOutlined, HighlightOutlined} from "@ant-design/icons";

export default function EditableText(props) {
    let { style,children,onChange,editBy='icon',ellipsis=false,maxRows,autoSize,minRows,enterIcon,tooltip,maxLength=500,disabled=false,mark=false,code=false,keyboard=false,
        underline=false,deletee=false,strong,italic,copyable
    } = props;
    const [editableStr, setEditableStr] = useState(children);
    const onChangeText=(e)=>{
        setEditableStr(e);
        onChange && onChange(e)
    }
    return (
        <Typography.Paragraph
            {...props}

            editable={{
                icon: <EditOutlined style={{paddingRight:10,fontSize:24}} />,
                tooltip: 'برای ویرایش کلیک کنید.',
                onChange: onChangeText,
                triggerType: editBy,
                enterIcon:null,
                maxLength: 500,
                maxRows: 1,
                //autoSize: { maxRows: 1, minRows: 3 },
            }}
        >{editableStr}</Typography.Paragraph >
    );
}



