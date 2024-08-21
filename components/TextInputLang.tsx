import { FC, useEffect, useState } from "react";
import { Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback } from "react-native";

interface TextInputLangProps {
    
    placeholder: string;
    _value: string;
    onFinishTyping: (text: string) => void;
    onInputPress: () => void;
}

const TextInputLang: FC<TextInputLangProps> = ({placeholder, onFinishTyping,onInputPress, _value }) => {
    const [value, setValue] = useState('');
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleChangeText = (text: string) => {
        setValue(text);

        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        const timeout = setTimeout(() => {
            onFinishTyping(text);
        }, 50); // modify that number if u want a debounce behavior

        setTypingTimeout(timeout);
    };

    useEffect(() => {
        setValue(_value);
    }, [_value]);

    useEffect(() => {
        return () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
        };
    }, [typingTimeout]);

    return (
        
            <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor='#A5E3FF'
            value={value}
            onChangeText={handleChangeText}
            multiline={true}
            onPress={onInputPress}
        />
        
        
    );
};

const styles = StyleSheet.create({
    textInput: {
        marginTop: 60,
        width: '80%',
        textAlign: 'left',
        fontSize: 20,
        color: 'white',
        fontFamily: 'sans-serif',
        height: "auto"
    },
});

export default TextInputLang;