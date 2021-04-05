import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import MyLogo from '../images/content/logoa.svg';
import MyHeader from '../images/content/header.png';
function Page2() {
    const subjectTables = useSelector(state => state.subjectTable.data);

    return (
      <div>
        <img src={MyLogo} />
        <ul>
             Хичээл:
           {subjectTables.map(subj => (
            <li value={subj.id}>{subj.name}</li>

          ))
          }
        
        </ul>
        <img src={MyHeader} />
        </div>
    )
}

export default Page2
