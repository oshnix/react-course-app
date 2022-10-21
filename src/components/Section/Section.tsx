import classes from './section.module.scss';

interface ISectionProps {
    children: JSX.Element | Array<JSX.Element>;
    header?: string;
}

export function Section({ header, children }: ISectionProps) {
    return (
        <section className={classes.section}>
            {header && (
                <header>
                    {header}
                </header>
            )}
            {children}
        </section>
    )
}
