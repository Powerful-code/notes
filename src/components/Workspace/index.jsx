import React, { useContext } from "react";
import { Layout } from "antd";
import TextEditor from '../TextEditor/index.jsx'
import { NotesContext } from "../../contexts/NotesContext";

const Workspace = () => {
  const { Content } = Layout;
  const { debounceChange, note} = useContext(NotesContext)
  console.log(note)
  return <Content style={{height: '80vh'}}><TextEditor disabled={note === "" || note === undefined} debounceChange={debounceChange} value={note?.content} tabIndex={1} /></Content>;
};

export default Workspace;
