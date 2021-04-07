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
      <div className="garchig1">Хичээл: </div>
        <select className="hicheel">
            {subjectTableData.map((item) => (
                <option value={item.id}>{item.name}</option>
            
            ))}
            
        </select>
        <div className="garchig2">Анги: </div>
        <select className="hicheel">
            {classTableData.map((item) => (
                <option value={item.id}>{item.name}</option>
            
            ))}
            
        </select>
        <div className="buttn">
          <div className="side1">Сонгогдсон даалгавар</div>
          <div className="side2">120</div>
        </div>
        <div className="buttn">
          <div className="side1">Сонгогдсон даалгавар</div>
          <div className="side2">12</div>
        </div>
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
