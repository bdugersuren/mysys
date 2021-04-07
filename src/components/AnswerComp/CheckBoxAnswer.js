import React, { useState } from 'react'
import { BiChevronRight, BiChevronDown,BiCheckboxChecked,BiCheckbox,BiCheckboxSquare, BiVerticalCenter,BiBookOpen,
    BiBook,BiBookReader,BiArrowFromTop} from "react-icons/bi";

function CheckBoxAnswer() {
    const [isCheck, setIsCheck] = useState(true);
    return (
        <div>
            <div  onClick={()=>setIsCheck(!isCheck)}> {isCheck?<BiCheckboxChecked  />:<BiCheckbox />}</div>
            <div>
                  Хариулт-1
              </div>
        </div>
    )
}

export default CheckBoxAnswer
