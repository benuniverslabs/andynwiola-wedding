import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import styles from './Header.module.scss';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';

type ListItem = {
	label: string;
	href: string;
	children: ListItem[];
	id: string;
};

interface HeaderListProps {
	items: ListItem[];
}

const HeaderList: FC<HeaderListProps> = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.id}>{item.label}</li>
			))}
		</ul>
	);
};

const Header = () => {
	const [showMobileNav, setShowMobileNav] = useState(false);
	const [navChange, setNavChange] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > window.innerHeight - 90) {
				setNavChange(true);
			} else {
				setNavChange(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setShowMobileNav(e.target.checked);
	};
	return (
		<div>
			<nav
				className={classNames(styles.header, {
					[styles.change]: navChange,
				})}
			>
				<div className={styles['logo-container']}>
					<Image
						className={styles.logo}
						src="/images/logo.png"
						alt="Andy and Wiola Wedding Logo"
						width={55}
						height={55}
					/>
				</div>
				<div className={styles['main-links']}>
					<a className="nav-item nav-link active" href="#information">
						Information
					</a>
					<a className="nav-item nav-link" href="#day2">
						Day 2
					</a>
					<a className="nav-item nav-link" href="#location">
						Location
					</a>
					<a className="nav-item nav-link" href="#gifts">
						Gifts
					</a>
					<a className="nav-item nav-link" href="#qnaire">
						Questionnaire
					</a>
					<Button href="#rsvp" type="button" variant="outline-dark">
						RSVP
					</Button>
				</div>
				<div>
					<HamburgerIcon onChange={handleChange} active={showMobileNav}/>
				</div>
			</nav>
			<div
				className={classNames(styles['mobile-links-container'], {
					[styles.show]: showMobileNav,
				})}
			>
				<div className={styles['mobile-links']}>
					<div>
						<a onClick={() => setShowMobileNav(false)} className="nav-item nav-link active" href="#information">
							Information
						</a>
						<a onClick={() => setShowMobileNav(false)}  className="nav-item nav-link" href="#day2">
							Day 2
						</a>
						<a onClick={() => setShowMobileNav(false)}  className="nav-item nav-link" href="#location">
							Location
						</a>
						<a onClick={() => setShowMobileNav(false)}  className="nav-item nav-link" href="#gifts">
							Gifts
						</a>
						<a onClick={() => setShowMobileNav(false)}  className="nav-item nav-link" href="#qnaire">
							Questionnaire
						</a>
					</div>
					<Button href="#rsvp" type="button" className="btn btn-sm" variant="outline-dark" style={{display:'grid', placeItems:'center', width:'50%'}}>
						RSVP
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
