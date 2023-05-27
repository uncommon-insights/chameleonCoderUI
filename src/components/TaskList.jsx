import { ProjStructCtx } from "./ProjStructCtx";
import React, { useState, useEffect, useContext } from "react";
// import Button from 'react-bootstrap/Button';
import CustomEdiText from './CustomEdiText';


function TaskList() {
    const { projStruct, setProjStruct } = useContext(ProjStructCtx);

    return(
        <div>
            <div className="row">
                <div className="col"><h2>Tasks</h2></div>

            </div>
            
            {projStruct.map((element) => <CustomEdiText text={element} />)}
        </div>
    )
}

export default TaskList;