import {Section} from "./Section";
import {TaskListPage} from "./TaskListPage";
import React from "react";

export function TaskPage() {
    return (
        <Section title="Tasks">
            <TaskListPage/>
        </Section>
    );
}