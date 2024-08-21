import LangToLang from '@/components/LangToLang';
import Mic from '@/components/Mic';
import TextInputLang from '@/components/TextInputLang';
import TextOutputLang from '@/components/TextOutputLang';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { View,StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Translator, { TranslatorProvider } from 'react-native-translator'
import { RootSiblingParent } from 'react-native-root-siblings';
import * as Clipboard from 'expo-clipboard';
import Copy from '@/components/Copy';



export default function HomeScreen() {

  const [langFrom, setLangFrom] = useState({
    lang: 'Bangla',
    code: 'bn',
    countryCode : 'BD'
  });
  
  const [langTo, setLangTo] = useState(
    {
      lang: 'English',
      code: 'en',
      countryCode : 'US'
    }
  );

  
  const [micHidden, setMicHidden] = useState(false);
  const [textToTranslate, setTextToTranslate] = useState('');
  const [result, setResult] = useState('');
  


  const onSwap = () => {
    const temp = langFrom;
    setLangFrom(langTo);
    setLangTo(temp);
  }
  const onInputPress = () => {
    setMicHidden(true);
  }

  const onFinishedTyping = (text: string) => {
    setTextToTranslate(text);
    console.log(text);
  }
  
  const onCopyPress = () => {
    copyToClipboard(result);
   
    
  }

  const copyToClipboard = async (txt:string) => {
    await Clipboard.setStringAsync(txt);
  };
  

  const [isRecording, setIsRecording] = useState(false);
  
  return ( 
    <RootSiblingParent>
      <TranslatorProvider>
<TouchableWithoutFeedback onPress={()=>{
Keyboard.dismiss();
setMicHidden(false);
}} 
accessible={false}>
  <LinearGradient
  colors={['#46cbff', '#3daae8']}
  style={styles.linearGradient}
>
<View style={styles.container1}>
<LangToLang langFrom={langFrom.lang} langTo={langTo.lang}  onSwap={onSwap}/>
<TextInputLang
  onInputPress={onInputPress}
  placeholder="Type here"
  _value={textToTranslate}
  onFinishTyping={(text) => onFinishedTyping(text)}
/>
</View>
<View style= {styles.micContainer}>
  {
  //!micHidden && <Mic onClick={
    //() => {
    //  if (!isRecording) {
     //  // startRecording();
    //  } else {
   //   //  stopRecording();
   // }
 // }
 // }/>
  }
</View>

<View style = {styles.container3}>
<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
<TextOutputLang text={result}/>
<Copy onPress={onCopyPress}/>
</View>
<Translator
from={langFrom.code}
to={langTo.code}
value={textToTranslate}
type='google'
onTranslated={(t) => {
  if (t != 'Enter a URL'){
    setResult(t);
  }else{
    setResult('')
  }
  }}
/>
</View>

</LinearGradient>
</TouchableWithoutFeedback>
      </TranslatorProvider>
    </RootSiblingParent>
    
    
    
  );
}

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    height: '40%',
    margin: 10,
  },
  container3: {
    alignItems: 'center',
    height: '50%',
    backgroundColor: 'white',
     padding: 10,
      borderRadius: 40,
  },
  micContainer: {
    alignItems: 'center',
    height: '10%',
    margin: 10,
  },
  linearGradient: {
    flex: 1,
  },
});


