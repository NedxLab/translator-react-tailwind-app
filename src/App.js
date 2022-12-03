import React from 'react';
import './main.css';
import Body from './Body';
import Languages from './Data';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [fromValue, setFromValue] = useState();
  const [toValue, setToValue] = useState("");
 
  const [selectedOption, setSelectedOption] = useState('en-GB');
  const [secondSelectedOption, setSecondSelectedOption] = useState('ha-NE');
const language = Object.entries(Languages);
const options = language.map((lang, index)=>{
  return {
      value: lang[0],
      label: lang[1],
      key: index
  }
})
  
  const changeText = ()=>{
    let tempValue = fromValue;
   setFromValue(toValue);
    setToValue(tempValue)
    let tempSelection = selectedOption;
    setSelectedOption(secondSelectedOption)
    setSecondSelectedOption(tempSelection)
  }
  const getFromValue = (e)=>{
   setFromValue(e.target.value)
  }
  const getToValue = (e)=>{
    setToValue(e.target.value)
  }
  const getFromSelect = (e)=>{}

  const getToSelect = (e)=>{
    console.log(e.target)
  }
  const translate = (e)=>{
    if(!fromValue){
      return
    } else{
    e.target.innerText = "Translating...";
    Axios.get(`https://api.mymemory.translated.net/get?q=${fromValue}&langpair=${selectedOption.value || selectedOption}|${secondSelectedOption.value || secondSelectedOption}`)
    .then((res) => {
      setToValue(res.data.responseData.translatedText)
      e.target.innerText = "Translate Text";
    }
      ) 
    .catch(
      err => console.log(err))
     return;
  }}
  const copyFrom = (e)=>{
    navigator.clipboard.writeText(fromValue)
  }
  const copyTo = (e)=>{
    navigator.clipboard.writeText(toValue)
  }
  const speakFrom = (e)=>{
    const utterance = new SpeechSynthesisUtterance(fromValue)
    utterance.lang = selectedOption
    speechSynthesis.speak(utterance)
  }
  const speakTo = (e)=>{
    const utterance = new SpeechSynthesisUtterance(toValue)
    utterance.lang = secondSelectedOption
    speechSynthesis.speak(utterance)
  }
  
  return (
   <>
    <Body
    changeText = {changeText}
    getFromValue = {getFromValue}
    getToValue = {getToValue}
    toValue = {toValue}
    fromValue = {fromValue}
    translate = {translate}
    getFromSelect = {getFromSelect}
    getToSelect = {getToSelect}
    secondSelectedOption = {secondSelectedOption}
    selectedOption = {selectedOption}
    setSelectedOption = {setSelectedOption}
    setSecondSelectedOption = {setSecondSelectedOption}
    options = {options}
    copyFrom = {copyFrom}
    copyTo = {copyTo}
    speakTo = {speakTo}
    speakFrom = {speakFrom}
    />
   </>
  );
}

export default App;
