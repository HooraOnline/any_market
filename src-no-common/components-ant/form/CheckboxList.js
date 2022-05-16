
import {useState} from "react";
import {Checkbox as Checkbox2, Col, Row} from 'antd';
import Div from "../Div";

export default function CheckboxList(props) {
    let { style,defaultValue,disabled,name,options,value,onChange,
    } = props;
    const defaultCheckedList = ['Apple', 'Orange'];
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const plainOptions = [
        { label: 'اپل', value: 'Apple' },
        { label: 'مایکروسافت', value: 'Pear' },
        { label: 'گوگل', value: 'Orange' },
    ];

   /* const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };*/

    return (
        <Checkbox2.Group {...props}
                         //options={plainOptions}
                         //value={checkedList} onChange={onCheckChange}
         >
                <Div style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {plainOptions.map(item=>(
                        <Checkbox2 value={item.value}>{item.label}</Checkbox2>
                    ))}
                </Div>
        </Checkbox2.Group>
    );
}



