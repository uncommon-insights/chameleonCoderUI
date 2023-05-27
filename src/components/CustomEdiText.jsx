import React, { useState, useEffect, useContext } from 'react';
import EdiText from 'react-editext';
import Button from 'react-bootstrap/Button';
import { Url, getRecords } from "./utils";
import { RelDocCtx } from "./RelDocCtx";

function CustomEdiText(props) {
  const [value, setValue] = useState('');
  const { relDoc, setRelDoc } = useContext(RelDocCtx);
  
  useEffect(() => {setValue(props.text);}, [props.text])

  const handleSave = (val) => {
    console.log('Edited Value -> ', val);
    setValue(val);
  };

  function clickFn() {
    console.log(value)
    getRecords(Url, {task: "getDoc", message: value}).then(resp => {
        console.log(resp['rankedCorp'].slice(0,3));
        setRelDoc(resp['rankedCorp']);
    })
  }

  return (
    <div className='row'>
        <div className="col-11 mt-2">
            <EdiText type="textarea" value={value} onSave={handleSave} inputProps={{
            style: {outline: 'solid', display: 'flex'}}}
            viewProps={{ style: {outline: 'solid', display: 'flex'} }}
            />
        </div>
        <div className="col-1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Button variant="primary" size="sm" onClick={clickFn}>Doc</Button>
        </div>
    </div>
  );
}

export default CustomEdiText;