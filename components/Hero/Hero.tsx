import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './Hero.module.scss';

const Hero = () => {

    
    
    return (
	<div className={styles.container}>
		<div className={styles['image-container']}>
			<Image
				className={styles['hero-image']}
				src="/images/hero-image.JPG"
				fill
				alt="Andy and Wiola Main Images"
			/>
		</div>
		<div className={styles['text-container']}>
			{/* <p className={styles['hero-text']}>Wioletta & Andrew</p>
			<div className={styles['text-image-container']}>
				<img className={styles['text-image']} src="images/logo.png"></img>
			</div>
			<p className={styles['hero-date']}>7th October 2023</p> */}
			<Image src="/images/name-text.png" width={300} height={200} className={styles['name-text']} alt="Andy Wiola Hero Text"/>
			<p className={styles['hero-date']} style={{marginTop:25}}>7th October 2023</p>
		</div>
	</div>
);}

export default Hero;
