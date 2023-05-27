import React, { useState, useEffect, useContext } from 'react';
import EdiText from 'react-editext';
import Button from 'react-bootstrap/Button';
import { Url, getRecords } from "./utils";
import { RelDocCtx } from "./RelDocCtx";

function Docs() {
    const { relDoc, setRelDoc } = useContext(RelDocCtx);
    const mySlice = relDoc.slice(0, Math.min(relDoc.length, 5));
    var previewList = [];
    for (const [corp, corpPath] of mySlice) {
        const lines = corp.split('\n');
        previewList.push(lines.slice(0, Math.min(lines.length,5)));
    }
    console.log(previewList);

    function generateDocPreview(arr) {
        return(
            <div className='row m-1' style={{border: 'solid'}}>
                {arr.map(line => <p>{line}</p>)}
            </div>
        )
    }

    return(
        <div>
            <h2>Docs</h2>
            {previewList.map((linesArr) => generateDocPreview(linesArr))}
        </div>
      )
}

export default Docs;