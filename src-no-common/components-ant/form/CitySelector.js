import {useState} from "react";
import {View} from "../../../react-native";
import {locationRed} from "../../../public/icons";
import {Modal} from "antd";

export default function CitySelector(props){
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div style={{position: 'relative',...props.style}}>
            <View onClick={showModal}  style={{alignItems:'center',justifyContent: 'center'}}>
                <img src={locationRed} width={25} height={25} style={{}}/>
                <div  style={{paddingRight: 3, fontSize: 15,color:'#d11d1d'}}>تهران</div>
            </View>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>تهران</p>
                <p>مشهد</p>
                <p>اضفهان</p>
            </Modal>
        </div>
    );
};