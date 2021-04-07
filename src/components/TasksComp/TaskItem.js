import React, { useState } from "react";
import MyLogo from "../../images/content/logoa.svg";
import {CgMaximize, CgMinimize, CgChevronDown,CgChevronUp } from "react-icons/cg";
import { BiChevronRight, BiChevronDown,BiCheckboxChecked,BiCheckbox,BiCheckboxSquare, BiVerticalCenter,BiBookOpen,
  BiBook,BiBookReader,BiArrowFromTop, BiBookHeart} from "react-icons/bi";
import AnswerComp from "../AnswerComp";
import { GrAddCircle, GrCheckmark, GrDown, GrEdit, GrTask } from "react-icons/gr";



function TaskItem() {
  const [isAnswer, setIsAnswer] = useState(true);
  const [isQuestions, setIsQuestions] = useState(false);
  const [isChoose, setIsChoose] = useState(false);
  return (
    <div className="taskitem" style={{fontSize:'20px'}}>
      <div className="taskitem-header">
      <div  onClick={()=>setIsChoose(!isChoose)}> {isChoose?<BiCheckboxChecked  />:<BiCheckbox />}</div>
        <div>Question -1</div>

        <GrAddCircle />
          <BiArrowFromTop />
          <BiBookHeart />
        <div>1kjhg kjgh kjghkjh </div>
        <div onClick={()=>setIsAnswer(!isAnswer)}> {isAnswer?<CgMinimize  />:<CgMaximize />}</div>
        <div onClick={()=>setIsQuestions(!isQuestions)}> {isQuestions?<CgChevronUp style={{color:'red'}}/>:<CgChevronDown />}</div>
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
