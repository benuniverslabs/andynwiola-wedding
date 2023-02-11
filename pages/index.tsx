import Head from 'next/head';

import Header from '@/components/Header/Header';

import Hero from '@/components/Hero/Hero';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/Home.module.scss';
import RSVP from '@/components/Form/RSVP/RSVP';
import Section from '@/components/Section/Section';
import Qnaire from '@/components/Form/Qnaire/Qnaire';
export default function Home() {
	// useEffect(() => {
	// 	const data = {
	// 		to: 'ben.haynes.dev@gmail.com',
	// 		subject: 'RSVP FROM DAVID',
	// 		message: 'Yes yes',
	// 	};
	// 	emailjs
	// 		.send('service_ninau4u', 'template_9k2pi3a', data, 'kJerNjVPBD8xfpOqo')
	// 		.then((response) => {
	// 			console.log('Email successfully sent!');
	// 		})
	// 		.catch((error) => {
	// 			console.log('Error:', error);
	// 		});
	// }, []);
	return (
		<div>
			<Head>
				<title>Andy & Wiola Wedding</title>
				<meta name="description" content="And and Wiola's Wedding" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div style={{ height: 90 }}></div>

			<Hero />

			<Section id="information" title="Information">
				<div id="ceremony">
					<h5 className="heading-title">Ceremony</h5>
					<p className="body-text">Kościół Przemienienia Pańskiego</p>
				</div>
				<div id="Reception">
					<h4 className="heading-title">Reception</h4>
					<p className="body-text">Sala Weselna Chabrowy</p>
				</div>
				<div id="Transport">
					<h4 className="heading-title">Transport</h4>
					<p className="body-text">
						We are happy to arrange transport from Warsaw airport for our guests
						once arrival dates and times are confirmed.
					</p>
					<p className="body-text">
						Transport will be provided from your accommodation throughout the
						day. Please be ready for 2:00PM
					</p>
				</div>
				<div id="accomodation">
					<h4 className="heading-title">Accommodation</h4>
					<p className="body-text">
						A block of rooms have been reserved for our guests. Please confirm
						if you would like us to book it for you. Please fill in attached
						questionnaire to provide the details.
					</p>
				</div>

				<Button variant="outline-dark">Questionnaire</Button>
			</Section>

			<Section id="day2" title="Day 2">
				<div id="afterparty">
					<h4 className="heading-title" style={{ marginBottom: '4rem' }}>
						After Party
					</h4>
					<p className="body-text">
						Polish wedding receptions often last all night and can include a
						second day of partying. This wedding celebration takes place right
						after the first day and is much more private and less formal. We
						would like to invite you to celebrate with us on Sunday 8th October
						(time TBC)
					</p>
				</div>

				<Section title="Location" id="location">
					<h4 className="heading-title" style={{ marginBottom: '2rem' }}>
						Łuków
					</h4>
					<p className="body-text">
						Is a small town in Eastern Poland located around 120km from the
						capital
					</p>

					<h4 className="heading-title" style={{ marginBottom: '2em' }}>
						Destination Airport
					</h4>
					<p className="body-text">Warsaw Chopin Airport</p>
				</Section>

				<Section title="Gifts" id="gifts">
					<p className="body-text">
						Please do not feel obliged to buy us a gift, all that we are
						expecting is you. If you would like to give us something, a
						contribution would be greatly appreciated. Thank you, The Bride and
						Groom.
					</p>
				</Section>
			</Section>

			<Section title="Questionnaire" id="qnaire">
				<Qnaire />
			</Section>

			<Section title="RSVP" id="RSVP">
				<RSVP />
			</Section>

			
		</div>
	);
}
