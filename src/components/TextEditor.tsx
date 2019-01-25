import React, { useState } from "react";
import { Editor } from "slate-react";
import Plain from "slate-plain-serializer";
import { Value } from "slate";
import { debounce } from "../util";
type props = {
  defaultValue: string;
  onSave?: (value: string) => void;
};

const TextEditor = (props: props) => {
  const [value, setValue] = useState<Value>(
    Plain.deserialize(props.defaultValue)
  );

  const save = debounce((value: Value) => {
    props.onSave && props.onSave(Plain.serialize(value));
  }, 500);

  const onChange = ({ value }: any) => {
    setValue(value);
    save(value);
  };

  return <Editor autoFocus value={value} onChange={onChange} />;
};

export default TextEditor;
