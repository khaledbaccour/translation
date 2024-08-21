import { FC } from "react";
import { Text, StyleSheet } from "react-native";

interface TextOutputLangProps {
    text: string;
}

const TextOutputLang: FC<TextOutputLangProps> = ({ text }) => {

    
    return (
        <Text style={styles.textoutput}>{text}</Text>
    );
};

export default TextOutputLang;

const styles = StyleSheet.create({
    textoutput: {
        marginTop: 60,
        width: '80%',
        textAlign: 'left',
        fontSize: 20,
        color: 'black',
        fontFamily: 'sans-serif',
        height: "auto"
    },
});