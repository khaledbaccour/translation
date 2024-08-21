import { FC } from "react";
import { TouchableOpacity, Image } from "react-native";

interface CopyProps {
    onPress: () => void;
}

const Copy: FC<CopyProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={{
            width: 'auto',
            alignItems: 'center',
            marginTop: 60,
        }} onPress={onPress}>
            <Image
                source={require('../assets/images/copy.png')}
                style={{
                    width: 40,
                    height: 40,}}
            />
        </TouchableOpacity>
    );
};

export default Copy;
