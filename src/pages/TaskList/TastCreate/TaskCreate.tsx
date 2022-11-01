import {Form, Formik} from "formik";
import {ITask} from "../../../api/tasks";
import React from "react";
import {TextControl} from "../../../components/TextControl/TextControl";
import classes from './taskCreate.module.scss';
import * as yup from 'yup';

interface ITaskCreate extends Omit<ITask, 'id'> {
    email: string;
}

const initialValues: ITaskCreate = {
    name: '',
    email: '',
};

const validationSchema = yup.object({
    name: yup.string().required().min(5, 'Task name should be long enough'),
    email: yup.string().email().required(),
});

export function TaskCreate() {
    const onSubmit = (values: ITaskCreate) => {
        console.log(values);

    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            {props => (
                <Form onSubmit={props.handleSubmit} className={classes.formContainer}>
                    <TextControl name="name" placeholder="Task Name" />
                    <TextControl name="email" placeholder="Task Email"/>

                    <button type="submit">
                        Save task
                    </button>
                </Form>
            )}
        </Formik>
    )

}
