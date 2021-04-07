import React, { useState } from "react";
import MyLogo from "../../images/content/logoa.svg";
import {CgMaximize, CgMinimize, CgChevronDown,CgChevronUp } from "react-icons/cg";
import { BiChevronRight, BiChevronDown,BiCheckboxChecked,BiCheckbox,BiCheckboxSquare, BiVerticalCenter,BiBookOpen,
  BiBook,BiBookReader,BiArrowFromTop} from "react-icons/bi";
import AnswerComp from "../AnswerComp";

function TaskItem() {
  const [isAnswer, setIsAnswer] = useState(true);
  const [isQuestions, setIsQuestions] = useState(false);
  const [isChoose, setIsChoose] = useState(false);
  return (
    <div className="taskitem" style={{fontSize:'20px'}}>
      <div className="taskitem-header">
<<<<<<< HEAD
      <div  onClick={()=>setIsChoose(!isChoose)}> {isChoose?<BiCheckboxChecked  />:<BiCheckbox />}</div>
        <div>Question -1</div>
        <div>1kjhg kjgh kjghkjh </div>
        <div onClick={()=>setIsAnswer(!isAnswer)}> {isAnswer?<CgMinimize  />:<CgMaximize />}</div>
        <div onClick={()=>setIsQuestions(!isQuestions)}> {isQuestions?<CgChevronUp style={{color:'red'}}/>:<CgChevronDown />}</div>
=======
        <input type="checkbox"></input>
        <div className="question">Question -1</div>
        <div className="header-items">
          {/* <div>1</div> */}
          <img src={MyLogo}  onClick={()=>setIsQuestions(!isQuestions)}/>
          <div onClick={()=>setIsAnswer(!isAnswer)}>&nbsp;&nbsp;&nbsp; ^ &nbsp;&nbsp;&nbsp;</div>
        </div>
>>>>>>> main
      </div>

      {isQuestions && (
        <div className="task-body">
          <div className="taskitem-content">Энэ хэсэгт тухайт тестийн асуулт хэсэг байрлах юм</div>
          {isAnswer&&<div className="taskitem-answer">
              <AnswerComp />              
          </div>
          }     
          </div> 
      )}
    </div>
  );
}

export default TaskItem;
