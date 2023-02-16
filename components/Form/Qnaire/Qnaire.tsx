import Button from 'react-bootstrap/Button';
import NamePicker from '../FormComponents/NamePicker';
import { Formik, Form } from 'formik';
import validationSchema from './validation';
import FormInput from '../FormInput/FormInput';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import styles from './Qnaire.module.scss';

const Qnaire = () => {
	const [formSuccess, setFormSuccess] = useState(false);

	return (
		<section
			className={styles.container}
			id="rsvp"
			style={{ position: 'relative' }}
		>
			{formSuccess && (
				<div
					style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						background: 'rgba(255,255,255,.8)',
						zIndex: 55,
						display: 'grid',
						placeItems: 'center',
						color: 'green',
						fontSize: 22,
					}}
				>
					Questionnairre Submitted
				</div>
			)}
			<p>
				In order to book your transfer from Warsaw Chopin Airport and to secure your rooms, please fill
				out the questionnaire below.
			</p>
			<div id="afterparty">
				<Formik
					initialValues={{
						guest1: '',
						guest2: '',
						guest3: '',
						guest4: '',
						arrivalDate: '',
						arrivalTime: '',
						noNights: '',
						dietryR: '',
						additionalInfo: '',
					}}
					onSubmit={({ guest1, guest2, guest3, guest4, arrivalDate, arrivalTime, noNights, dietryR, additionalInfo}) => {
						const names = `${guest1} ${guest2} ${guest3} ${guest4}`;
						const data = {
							to: 'andywiolawedding@outlook.com',
							from_name: names,
							names: names,
                            arrivalDate,
                            arrivalTime,
                            noNights,
                            dietryR,
                            additionalInfo							
						};

						emailjs
							.send(
								'service_ninau4u',
								'template_30pleoq',
								data,
								'kJerNjVPBD8xfpOqo'
							)
							.then((response) => {
								if (response.text === 'OK') {
									setFormSuccess(true);
								}
							})
							.catch((error) => {
								console.log('Error:', error);
							});
					}}
					validationSchema={validationSchema}
				>
					{({ errors, touched }) => {
						const context = {
							errors,
							touched,
						};

						return (
							<Form>
								<NamePicker />
								<label className="mb-2" htmlFor="exampleFormControlInput1">
									Arrival Date
								</label>
								<FormInput context={context} name="arrivalDate" type="date" />

								<label className="mb-2" htmlFor="exampleFormControlInput1">
									Arrival Time
								</label>
								<FormInput context={context} name="arrivalTime" type="time" />

								<label className="mb-2" htmlFor="exampleFormControlInput1">
									How many nights are you staying?
								</label>
								<FormInput context={context} name="noNights" type="number" />

								<label className="mb-2" htmlFor="exampleFormControlInput1">
									Allergies / Dietary Requirements
								</label>
								<FormInput context={context} name="dietryR" />

								<label className="mb-2" htmlFor="exampleFormControlInput1">
									Any Additonal Comments
								</label>
								<FormInput
									context={context}
									name="additionalInfo"
									as="textarea"
									rows={5}
								/>

								<div className="mt-4">
									<Button
										type="submit"
										variant="secondary w-100"
										style={{ textAlign: 'center' }}
									>
										Submit
									</Button>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</section>
	);
};

export default Qnaire;
