import { FC } from 'react';
import classNames from 'classnames';
import styles from './Section.module.scss';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
    style?: {}
}

const Section: FC<SectionProps> = ({ id, title, className, style, children}) => 
    <section className={classNames(styles.container, className)} id={id} style={{...style}}>
        <h4 className={classNames('page-title', styles.title)}>{title}</h4>
            <div className={styles.content}>
            {children}
            </div>
            {/* <hr/> */}
    </section>


export default Section;