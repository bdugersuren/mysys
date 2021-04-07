import React, { useEffect, useState } from "react";
import PaginationComp from "../../components/PaginationComp";
import TasksComp from "../../components/TasksComp";
import { useSelector, useDispatch } from "react-redux";
import CheckboxTree from "react-checkbox-tree";
import Select from "react-select";
import { Translate, setLocale } from "react-redux-i18n";

import { loadClassDatas } from "../../redux/classTable/actionCreator";
import { loadSubjectDatas } from "../../redux/subjectTable/actionCreator";
import { loadTopicDatas } from "../../redux/topicTable/actionCreator";

import actions from "../../redux/topicTable/actions";

import {
  BiChevronRight,
  BiChevronDown,
  BiCheckboxChecked,
  BiCheckbox,
  BiCheckboxSquare,
  BiVerticalCenter,
  BiBookOpen,
  BiBook,
  BiBookReader,
  BiArrowFromTop,
} from "react-icons/bi";


import { GrAddCircle, GrCheckmark, GrDown, GrEdit, GrTask } from "react-icons/gr";


const nodes = [
  {
    value: "mars",
    label: "Mars",
    children: [
      { value: "phobos", label: "Phobos" },
      { value: "deimos", label: "Deimos" },
    ],
  },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 300,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

function TaskBankPage() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [classId, setClassId] = useState({});
  const [subjectId, setSubjectId] = useState({});

  useEffect(() => {
    console.log("====================> hi <=================");
    //dispatch(loadClassDatas());
    dispatch(loadTopicDatas());
    dispatch(
      actions.filterTopicDatas({
        class_id: classId.value ? classId.value : null,
        subject_id: subjectId.value ? subjectId.value : null,
      })
    );
  }, [classId, subjectId]);

  const subjectTableData = useSelector((state) => state.subjectTable.data);
  const classTableData = useSelector((state) => state.classTable.data);
  const topicTableData = useSelector((state) => state.topicTable.topics);

  useEffect(() => {
    console.log("=======================>");
    dispatch(loadClassDatas());
    dispatch(loadSubjectDatas());
    console.log("------------ Subject ----------------");
  }, []);

  const OnChangeClass = (selectedOption) => {
    setClassId(selectedOption);
    console.log(`selected ${classId.value}   ${selectedOption.value}`);
  };

  const OnChangeSubject = (selectedOption) => {
    setSubjectId(selectedOption);
    console.log(`selected ${subjectId.value}   ${selectedOption.value}`);
  };

  const classOptions = [];

  classTableData.map((c) => {
    const { _id, name } = c;
    return classOptions.push({
      value: _id,
      label: name,
    });
  });

  const subjOptions = [];

  subjectTableData.map((c) => {
    const { _id, name } = c;
    return subjOptions.push({
      value: _id,
      label: name,
    });
  });

  const topicNodes = [];

  topicTableData &&
    topicTableData.map((td) => {
      const { _id, name } = td;
      return topicNodes.push({
        value: _id,
        label: name,
        children: [],
      });
    });

  console.log("topic nodes ========================>", topicNodes);
  return (
    <div className="taskbank">
      <div className="taskbank_header">
        <div>Анги: </div>
        <Select
          className="selectClass"
          value={classId}
          onChange={OnChangeClass}
          options={classOptions}
          styles={customStyles}
        />

        <div>Хичээл: </div>
        <Select
          className="selectSubject"
          value={subjectId}
          onChange={OnChangeSubject}
          options={subjOptions}
          styles={customStyles}
        />

        <button>Сонгогдсон даалгавар 120</button>
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
        <button>Сонгогдсондаалгавар 120</button>
        <button>Сонгогдсон даалгавар 12</button>
      </div>
      <div className="taskbank_body">
        <div className="taskbank_leftside">
          <CheckboxTree
            nodes={nodes}
            checked={checked}
            expanded={expanded}
            onCheck={(checked) => setChecked(checked)}
            onExpand={(expanded) => setExpanded(expanded)}
            icons={{
              check: <BiCheckboxChecked />,
              uncheck: <BiCheckbox />,
              halfCheck: <BiCheckboxSquare />,
              expandClose: <BiChevronRight />,
              expandOpen: <BiChevronDown />,
              expandAll: <BiArrowFromTop />,
              collapseAll: <BiVerticalCenter />,
              parentClose: <BiBook />,
              parentOpen: <BiBookOpen />,
              leaf: <BiBookReader />,
            }}
          />

          <div>{checked}</div>
          <div>{expanded}</div>
        </div>
        <div className="taskbank_content">
          <TasksComp />
          <PaginationComp />
        </div>
        <div className="taskbank_rightside" >
          
          <BiBookReader />
          <GrCheckmark />
          <GrDown /> <GrEdit/> <GrTask />

        </div>
      </div>
    </div>
  );
}

export default TaskBankPage;
