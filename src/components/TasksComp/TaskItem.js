import React, { useState } from "react";
import MyLogo from "../../images/content/logoa.svg";

function TaskItem() {
  const [isAnswer, setIsAnswer] = useState(true);
  const [isQuestions, setIsQuestions] = useState(false);
  return (
    <div className="taskitem">
      <div className="taskitem-header">
        <input type="checkbox"></input>
        <div>Question -1</div>
        <div>1</div>
        <img src={MyLogo}  onClick={()=>setIsQuestions(!isQuestions)}/>
        <div onClick={()=>setIsAnswer(!isAnswer)}>&nbsp;&nbsp;&nbsp; ^ &nbsp;&nbsp;&nbsp;</div>
      </div>

      {isQuestions && (
        <div>
          <div className="taskitem-content">Энэ хэсэгт тухайт тестийн асуулт хэсэг байрлах юм</div>
          {isAnswer&&<div className="taskitem-answer">
              <div>
                  Хариулт-1
              </div>
              <div>
                  Хариулт-2
              </div>
              <div>
                  Хариулт-3
              </div>
              <div>
                  Хариулт-4
              </div>
          </div>
          }
          
        </div>
      )}
    </div>
  );
}

export default TaskItem;
