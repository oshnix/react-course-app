import classes from './section.module.scss';
import {Outlet} from "react-router-dom";

interface ISectionProps {
    header?: string;
}

export function Section({ header }: ISectionProps) {
    return (
        <section className={classes.section}>
            {header && (
                <header>
                    {header}
                </header>
            )}
            <Outlet/>
        </section>
    )
}
