import styles from 'Button.module.scss';
import { FC } from 'react';

interface ButtonProps {
	text: string;
	href: string;
}

const Button: FC<ButtonProps> = ({ text, href }) => {
	return <a href="href" className={styles.container}>{text}</a>;
};

export default Button;
