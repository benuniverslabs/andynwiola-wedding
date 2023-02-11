import React, { FC } from 'react';
import styles from './HamburgerIcon.module.scss';

interface HamburgerProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    active?: boolean;
}

const HamburgerIcon: FC<HamburgerProps> = ({ onChange, active }) => {
	return (
		<>
			<input
				onChange={onChange}
                checked={active}
				type="checkbox"
				id="toggle"
				className={styles.toggle}
			/>
			<label htmlFor="toggle" className={styles.hamburger}>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
			</label>
		</>
	);
};

export default HamburgerIcon;
