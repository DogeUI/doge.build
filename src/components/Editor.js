import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/lint/javascript-lint";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/closetag";
import "../themes/tuk-theme.css";
import "../themes/ayu-dark.min.css";
import "../themes/amy.css";
import "../themes/bespin.css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
    const { language, value, onSaveData, customHeight, fontSize, editorFontColor } = props;

    function handleChange(editor, data, value) {
        onSaveData(value);
    }

    return (
        <div className={customHeight}>
            <ControlledEditor
                onBeforeChange={(editor, data, value) => handleChange(editor, data, value)}
                value={value}
                className={"w-full h-full " + fontSize}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: editorFontColor,
                    lineNumbers: true,
                    matchBrackets: true,
                    autoCloseBrackets: true,
                    autoCloseTags: true,
                    scrollbarStyle: "null",
                    autofocus: true,
                }}
            />
        </div>
    );
}
