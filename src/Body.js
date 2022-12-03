import React from 'react'
import {MdRepeat, MdVolumeUp, MdContentCopy} from 'react-icons/md'
import Select from 'react-select';


const Body = ({speakFrom, speakTo, copyTo, copyFrom, changeText, getFromValue, getToValue, fromValue, toValue, translate, selectedOption,setSecondSelectedOption, setSelectedOption, secondSelectedOption,options }) => {
 return (
    <>
     <div className="w-full h-full bg-gradient-to-r from-slate-900 h-screen">
        <div className="card pt-5 border-slate-200 card-body">
                <form action="" className="m-auto rounded-lg bg-white w-full p-4 border-slate-400 md:w-1/2 sm:w-1/2" onSubmit={(e)=>e.preventDefault()}>
                    <div className="  border-x border-y border-gray-400 flex flex-auto flex-col justify-center md:divide-x sm:divide-x xs:divide-x msm:divide-y md:flex-row sm:flex-row xs:flex-row">
                        <textarea className='focus:outline-none p-2 resize-none border-gray-400' name="word" value={fromValue} id="from-text" cols="35" rows="13" onChange={getFromValue}></textarea>
                        <textarea className='focus:outline-none p-2 resize-none border-gray-400' name="translated" value={toValue} id="to-text" cols="35" rows="13" onChange={getToValue}></textarea>
                    </div>
                    <div className="p-2 block flex align-center flex-initial justify-around">
                        <span className="icon">
                            <MdVolumeUp 
                            onClick={speakFrom}
                            />
                        </span>
                        <span className="icon">
                            <MdContentCopy 
                           onClick={copyFrom}
                           />
                        </span>
                        <Select
                            menuPlacement="top"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            value={options.find(function (option) {
                                return option.value === selectedOption;
                              })}
                            options={options}
                        />
                          <span className="exchange icon">
                            <MdRepeat onClick={changeText}/>
                        </span>
                        <Select
                            menuPlacement="top"
                            defaultValue={secondSelectedOption}
                            onChange={setSecondSelectedOption}
                            value={options.find(function (option) {
                                return option.value === secondSelectedOption;
                              })}
                            options={options}
                        />
                        <span className="icon">
                            <MdContentCopy 
                           onClick={copyTo}
                            />
                        </span>
                        <span className="icon">
                            <MdVolumeUp
                            onClick={speakTo}
                            />
                        </span>
                    </div>
                    <button className="p-3 mb-5 bg-red-500 block w-full hover:bg-red-700 text-white rounded my-4" onClick={translate}>Translate Text</button>
                </form>
            </div>
      </div>
    </>
  )
}

export default Body