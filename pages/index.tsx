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
					<p className="body-text">Location of Ceremony</p>
				</div>
				<div id="Reception">
					<h4 className="heading-title">Reception</h4>
					<p className="body-text">Location of Reception</p>
				</div>
				<div id="Transport">
					<h4 className="heading-title">Transport</h4>
					<p className="body-text">
						We are happy to arrange transport for our guests from Warsaw Choppin
						Airport once arrival dates and tomie are conformed
					</p>
					<p className="body-text">
						Transport will be provied from your accomation throught the dfaty.
						Please be ready for 2:00pm
					</p>
				</div>
				<div id="Accomodation">
					<h4 className="heading-title">Accomdation</h4>
					<p className="body-text">
						Rooms have been sorted blah blah blah blah blah fdkshfoidshnfds
						ihodsbfods fodsf dsfdshfodsf
					</p>
				</div>

				<Button variant="outline-dark">QUESTIONNAIRE</Button>
			</Section>

			<Section id="day2" title="Day 2">
				<div id="afterparty">
					<h4 className="heading-title" style={{ marginBottom: '4rem' }}>
						After Party
					</h4>
					<p className="body-text">
						Polish weddings often last all night and can include a second day of
						partying. This wedding celbration takes place right ater the first
						dat and its muchh nore private and less formal. We would like to
						invite you to celbrate with us on Sunday 8Th
					</p>
				</div>

				<div id="location">
					<h4 className="heading-title" style={{ marginBottom: '4rem' }}>
						Location
					</h4>
					<h4 className="heading-title" style={{ marginBottom: '4rem' }}>
						Lukrow
					</h4>
					<p className="body-text">
						Is a small town in Eastern Poland around 120km from the capital
					</p>
				</div>

				<div id="gifts">
					<h4 className="heading-title" style={{ marginBottom: '4rem' }}>
						Gifts
					</h4>

					<p className="body-text">
						Please do not feel obliged to buy us a gift, all that we are
						expecting is you. If you would like to give something, a
						contribution would be greatly appreciated. Thank you. The Bride and
						Groom
					</p>
				</div>
			</Section>

			<Section title="RSVP" id="RSVP">
				<RSVP />
			</Section>

			<Section title="Questionairre" id="qnaire">
				<Qnaire />
			</Section>
		</div>
	);
}
