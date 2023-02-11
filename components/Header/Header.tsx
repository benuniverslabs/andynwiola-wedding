import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import styles from './Header.module.scss';
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
	const [navChange, setNavChange] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.pageYOffset > window.innerHeight - 90) {
            setNavChange(true);
          } else {
            setNavChange(false);
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);



	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setShowMobileNav(e.target.checked);
	};
	return (
		<div>
			<nav className={classNames(styles.header, {
				[styles.change]: navChange,
			})}>
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
						Questionairre
					</a>
					{/* <button>RSVP</button> */}
					<button type="button" className="btn btn-outline-secondary">RSVP</button>
				</div>
				<div>
					<HamburgerIcon onChange={handleChange} />
				</div>
				{/* <button>RSVP</button> */}
			</nav>
			<div
				className={classNames(styles['mobile-links'], {
					[styles.show]: showMobileNav,
				})}
			>
				<nav className="navbar px-4">
					<div className="navbar-nav">
						<a className="nav-item nav-link active" href="#">
							Home
						</a>
						<a className="nav-item nav-link" href="#">
							Features
						</a>
						<a className="nav-item nav-link" href="#">
							Pricing
						</a>
						<a className="nav-item nav-link" href="#">
							Disabled
						</a>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
