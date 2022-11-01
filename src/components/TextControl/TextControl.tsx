import {useField} from "formik";
import React from "react";

interface ITextControlProps {
    name: string;
    placeholder: string;
}

export function TextControl({name, placeholder}: ITextControlProps) {
    const [field, meta] = useField(name);
    const hasError = meta.touched && meta.error

    return (
        <div>
            <input type="text" placeholder={placeholder} {...field} />
            {hasError && (
                <span>{meta.error}</span>
            )}
        </div>
    );
}
