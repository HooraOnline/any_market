
import {mainColor, bgWhite} from "../../../src/helpers/colors";
import {Input, Select} from 'antd';
import {Option} from "antd/lib/mentions";
import InputText from "./InputText";




export default function InputWebSite(props) {
    let { style,defaultValue,beforeStyle} = props;
    const selectBefore = (
        <Select style={beforeStyle} defaultValue="http://" className="select-before">
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
        </Select>
    );
    const selectAfter = (
        <Select defaultValue=".com" className="select-after">
            <Option value=".com">.com</Option>
            <Option value=".jp">.jp</Option>
            <Option value=".cn">.cn</Option>
            <Option value=".org">.org</Option>
        </Select>
    );

    return (
         <InputText {...props} addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
    );
}



