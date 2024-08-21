import { FC } from "react";
import { TouchableOpacity, Image } from "react-native";

interface MicProps {
    onClick: () => void;
}

const Mic: FC<MicProps> = ({ onClick }) => {
    return (
        <TouchableOpacity style={{
            width: '100%',
            alignItems: 'center',
            marginVertical: 20,
        }} onPress={onClick}>
            <Image
                source={require('../assets/images/mic.png')}
                style={{
                    width: 50,
                    height: 50,}}
            />
        </TouchableOpacity>
    );
};

export default Mic;
