import React, {useState} from 'react';


function Sched_template(){
    const [sched, setSched] = useState("");
    const [schedList, setSchedList] = useState([]);
    const [time, setTime] = useState("");
    const [typaGuy, setTypaGuy] = useState("");

    
    const timePattern = /^([01]\d|2[0-3]):([0-5]\d)$/;
    const handleSchedInput = (e) => {
        setSched(e.target.value);
    }

    const make = () => {

    }

    const handleTypaGuy = (e) => {
        setTypaGuy(e.target.value);
    }
    
    const handleTime = (e) => {
        setTime(e.target.value);
    }
    const handleTimeBlur = () => {
        if (!time.match(timePattern)) {
            setTime('00:00');
        }
    }
    return(
        <div className="z-20">
            <div>
            <input
                type='text'
                placeholder='Tasks here'
                value = {sched}
                onChange={handleSchedInput}
                className = "mb-2"
                ></input>
                <button className="bg-cyan-900 ml-2 p-1 ">Add</button>
            </div>
            <div>
            <input
                type='text'
                placeholder = "HH:MM"
                pattern="^([01]\d|2[0-3]):([0-5]\d)$"
                onBlur={handleTimeBlur}
                onChange = {handleTime}
                value = {time}
                className = "mr-2"
                >
                </input>
            <select value={typaGuy} placeholder="Day" onChange={handleTypaGuy}>
                <option value="night">Night</option>
                <option value="morning">Morning</option>
                <option value="noon">Noon</option>
                <option value="afternoon">Afternoon</option>
            </select>
            </div>
                
        </div>
    );

}

export default Sched_template;
