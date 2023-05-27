import React, { useEffect, useState } from "react";
import Chat from "./components/Chat";
import TaskList from "./components/TaskList";
import { ProjStructCtx } from "./components/ProjStructCtx";
import { RelDocCtx } from "./components/RelDocCtx";
import Docs from "./components/Docs";
// TODO: toggle panels


function App() {
  const [projStruct, setProjStruct] = useState([]);
  const [relDoc, setRelDoc] = useState([]);

  return(
      <div className="row m-1">
        <div className="col m-1">
          <ProjStructCtx.Provider value={{ projStruct, setProjStruct }}>
            <Chat />
          </ProjStructCtx.Provider>
          
        </div>
        <div className="col m-1">
        <RelDocCtx.Provider value={{ relDoc, setRelDoc }}>
          <ProjStructCtx.Provider value={{ projStruct, setProjStruct }}>
            <TaskList />
          </ProjStructCtx.Provider>
        </RelDocCtx.Provider>
        </div>
        <div className="col m-1">
          <RelDocCtx.Provider value={{ relDoc, setRelDoc }}>
            <Docs />
          </RelDocCtx.Provider>
        </div>
      </div>
  )
}

export default App;