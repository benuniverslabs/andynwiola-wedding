import Button from 'react-bootstrap/Button';
import FormCheckbox from '../FormCheckboxes/FormCheckboxes';
import NamePicker from '../FormComponents/NamePicker';
import { Formik, Form } from 'formik';
import validationSchema from './validation';
import styles from './RSVP.module.scss';

const day1Options = [
	{
		value: 'yes',
		id: 'day1_yes',
		label: "I <b class='bold'>will</b> be able to attend",
	},
	{
		value: 'no',
		id: 'day1_no',
		label: "I <b class='bold'>will not</b> be able to attend",
	},
];

const day2Options = [
	{
		value: 'yes',
		id: 'day2_yes',
		label: "I <b class='bold'>will</b> be able to attend",
	},
	{
		value: 'no',
		id: 'day2_no',
		label: "I <b class='bold'>will not</b> be able to attend",
	},
];

const RSVP = () => (
	<section className={styles.container} id="rsvp">
		<div id="afterparty">
			<Formik
				initialValues={{
					day1: '',
					day2: '',
					guest1: '',
					guest2: '',
					guest3: '',
					guest4: '',
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

							<h6 className={styles['sub-title']}>Day 1</h6>
							<FormCheckbox context={context} name={'day1'} options={day1Options} />

							<h6 className={styles['sub-title']}>Day 2</h6>
							<FormCheckbox context={context} name={'day2'} options={day2Options} />

							<div>
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

export default RSVP;
