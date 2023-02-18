import Head from 'next/head';

import Header from '@/components/Header/Header';

import Hero from '@/components/Hero/Hero';
import Button from 'react-bootstrap/Button';
import styles from '@/styles/Home.module.scss';
import RSVP from '@/components/Form/RSVP/RSVP';
import Section from '@/components/Section/Section';
import Qnaire from '@/components/Form/Qnaire/Qnaire';
export default function Home() {
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
					<p
						className="body-text"
						style={{
							textTransform: 'uppercase',
							paddingBottom: 0,
							marginBottom: '0.4rem',
							fontWeight: 500,
						}}
					>
						Arrival in Poland
					</p>
					<p
						className="body-text"
						style={{
							marginTop: 0,
						}}
					>
						We are happy to arrange transport from Warsaw airport for our guests
						once arrival dates and times are confirmed.
					</p>

					<p
						className="body-text"
						style={{
							marginTop: 0,
						}}
					>
						If you want to arrange your own travel, the best way to get to Łuków is by train from Warsaw East Station
					</p>

					<p
						className="body-text"
						style={{
							textTransform: 'uppercase',
							paddingBottom: 0,
							marginBottom: '0.4rem',
							fontWeight: 500,
						}}
					>
						On the wedding day
					</p>
					<p
						className="body-text"
						style={{
							marginTop: 0,
						}}
					>
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

				<Button href="#qnaire" variant="outline-dark">
					Questionnaire
				</Button>
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
					<div className="body-text">
					<p>
						Please do not feel obliged to buy us a gift, all that we are
						expecting is you. However, if you would like to give us something, a
						contribution would be greatly appreciated.
					</p>
					<p>Thank you,</p>
					<p> The Bride and Groom.</p>
					</div>
				</Section>
			</Section>

			<Section title="Questionnaire" id="qnaire" style={{
				paddingTop:'1.5rem',
				'scroll-margin-top':' 6rem'
			}}>
				<Qnaire />
			</Section>

			<Section title="RSVP" id="rsvp" style={{
				paddingTop:'1.5rem',
				'scroll-margin-top':' 6rem',
				paddingBottom:180
			}}>
				<RSVP />
			</Section>
		</div>
	);
}
