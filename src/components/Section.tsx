import * as React from "react";

interface ISectionProps {
    children?: JSX.Element | Array<JSX.Element>;
    title: string;
}

export function Section({ children, title }: ISectionProps) {
    const memoizedTitle = React.useMemo(() => `Section: ${title}`, [title]);
    return (
        <section>
            <h2>{memoizedTitle}</h2>
            {children}
        </section>
    )
}