import { FC } from "react";
import { Text,View, Image,StyleSheet, TouchableOpacity} from "react-native";

interface LangToLangProps {
    langFrom: string;
    langTo: string;
    onSwap: () => void;
    }

const LangToLang: FC<LangToLangProps> = ({ langFrom, langTo, onSwap }) => {
    return (
        <View
        style={{
            marginTop: 30,
            height: 50,
            flexDirection: 'row',
            justifyContent: 'center',
        }}
        >
            <Text style={styles.text}>{langFrom}</Text>
            <TouchableOpacity onPress={onSwap}>
                <Image
                    source={require('../assets/images/exchange.png')}
                    style={{
                        width: 25,
                        height: 25,
                        margin: 10,
                    }}
                />
            </TouchableOpacity>
            
            <Text style={styles.text}>{langTo}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text : {
        margin: 12,
        marginTop: 6,
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'sans-serif',
    },
});

export default LangToLang;