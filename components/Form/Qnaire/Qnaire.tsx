import Button from 'react-bootstrap/Button';
import NamePicker from '../FormComponents/NamePicker';
import styles from './Qnaire.module.scss';

const Qnaire = () => (
	<section className={styles.container} id="rsvp">
		<p>
			In order to book your travel and acoomodation please fill out the
			questionairre below
		</p>
		<div id="afterparty">
			<NamePicker />

			<label className="mb-2" htmlFor="exampleFormControlInput1">
				Arrival Date
			</label>
			<input
				type="email"
				className="form-control mb-2"
				id="guest1"
				// placeholder="name@example.com"
			/>

			<label className="mb-2" htmlFor="exampleFormControlInput1">
				Arrival Time
			</label>
			<input
				type="email"
				className="form-control mb-2"
				id="guest1"
				// placeholder="name@example.com"
			/>

			<label className="mb-2" htmlFor="exampleFormControlInput1">
				How many nights are you staying?
			</label>
			<input
				type="email"
				className="form-control mb-2"
				id="guest1"
				// placeholder="name@example.com"
			/>

			<label className="mb-2" htmlFor="exampleFormControlInput1">
				Allergies / Dietary Requirements
			</label>
			<input
				type="email"
				className="form-control mb-2"
				id="guest1"
				// placeholder="name@example.com"
			/>

			<label className="mb-2" htmlFor="exampleFormControlInput1">
				Any Additonal Comments
			</label>
			<input
				type="email"
				className="form-control mb-2"
				id="guest1"
				// placeholder="name@example.com"
			/>

			<div className="mt-4">
				<Button variant="outline-secondary w-100">Submit</Button>
			</div>
		</div>
	</section>
);

export default Qnaire;
