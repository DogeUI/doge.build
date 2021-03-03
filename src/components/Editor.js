import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
    const { language, value, onChange, customHeight } = props;

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className={customHeight}>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="w-full h-full"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: "tuk",
                    lineNumbers: true,
                    matchBrackets: true,
                    autoCloseBrackets: true,
                    autoCloseTags: true,
                }}
            />
        </div>
    );
}
