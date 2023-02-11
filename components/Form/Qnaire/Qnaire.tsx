import Button from 'react-bootstrap/Button';
import NamePicker from '../FormComponents/NamePicker';
import { Formik, Form } from 'formik';
import validationSchema from './validation';
import FormInput from '../FormInput/FormInput';
import styles from './Qnaire.module.scss';

const Qnaire = () => (
	<section className={styles.container} id="rsvp">
		<p>
			In order to book your transfer from Warsaw Choppin airport please fill out the questionnaire below.
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
                    additionalInfo: ''
				}}
				onSubmit={(val) => console.log(val)}
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
							<FormInput context={context} name="dietryR" type="number" />

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
								<Button type="submit" variant="outline-secondary w-100">
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

export default Qnaire;
