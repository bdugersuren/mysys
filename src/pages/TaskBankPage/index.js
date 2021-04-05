import React from "react";
import PaginationComp from "../../components/PaginationComp";
import TasksComp from "../../components/TasksComp";
import { useSelector, useDispatch } from "react-redux";

function TaskBankPage() {
    const subjectTableData = useSelector((state) => state.subjectTable.data);
    const classTableData = useSelector((state) => state.classTable.data);
  return (
    <div className="taskbank">
      <div className="taskbank_header">
      <div>Хичээл: </div>
        <select>
            {subjectTableData.map((item) => (
                <option value={item.id}>{item.name}</option>
            
            ))}
            
        </select>
        <div>Анги: </div>
        <select>
            {classTableData.map((item) => (
                <option value={item.id}>{item.name}</option>
            
            ))}
            
        </select>
        <button>Сонгогдсон даалгавар 120</button>
        <button>Сонгогдсон даалгавар 12</button>
      </div>
      <div className="taskbank_body">
        <div className="taskbank_leftside">Зүүн талын хэсэг</div>
        <div className="taskbank_content">
          <TasksComp />
          <PaginationComp />
        </div>
        <div className="taskbank_rightside">
            fixed menu
        </div>
      </div>
    </div>
  );
}

export default TaskBankPage;
