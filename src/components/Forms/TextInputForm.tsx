import { TextField } from "@material-ui/core";
import React, { FunctionComponent } from "react";
import { ITextFieldDef } from "../../types";

interface TextInputFormProps {
    fields: ITextFieldDef[];
};

const TextInputForm: FunctionComponent<TextInputFormProps> = ({ fields }) => (
    <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        {
            fields.map((f, i) => {
                return (
                    <div key={i}>
                        <TextField
                            value={f.value}
                            name={f.name}
                            label={f.label}
                            margin="normal"
                            size="small"
                            variant="outlined"
                            type={f.type || "text"}
                            onChange={f.onInputChange}
                        />
                    </div>
                );
            })
        }
    </form>
);

export default TextInputForm;
