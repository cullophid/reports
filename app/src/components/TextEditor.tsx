import * as React from "react";
import { Editor } from "slate-react";
import Plain from "slate-plain-serializer";
import { Change, Value } from "slate";
import { debounce } from "../util";
type Props = {
  defaultValue: string;
  onSave?: (value: string) => void;
};

type State = {
  value: Value;
};

class TextEditor extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: Plain.deserialize(props.defaultValue)
    };
  }
  onChange = ({ value }: Change) => {
    this.setState({ value });
    this.save(value);
  };
  save = debounce((value: Value) => {
    this.props.onSave && this.props.onSave(Plain.serialize(value));
  }, 500);
  render = () => {
    return (
      <Editor autoFocus value={this.state.value} onChange={this.onChange} />
    );
  };
}

export default TextEditor;
