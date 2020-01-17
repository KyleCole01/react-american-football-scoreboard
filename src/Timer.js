import React, {useState} from "react";
 
 function Timer(props){
     const [time,setTime] = useState(props.time);
     setTimeout(function(){
         if(time>0){
         setTime(time-1);
         }
         else{
             let popup = document.querySelector(".popup");
             popup.classList.toggle('hidden');
            //  alert("                   TIME IS UP")
         }
     },1000);
return(
    <div className="timer">{`00:${time<10? "0"+time: time}`}</div>
)
}
export default Timer;