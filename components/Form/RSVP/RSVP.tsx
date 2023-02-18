import Button from 'react-bootstrap/Button';
import FormCheckbox from '../FormCheckboxes/FormCheckboxes.jsx';
import NamePicker from '../FormComponents/NamePicker';
import { Formik, Form } from 'formik';
import validationSchema from './validation';
import emailjs from '@emailjs/browser';
import styles from './RSVP.module.scss';
import { useState } from 'react';

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

const RSVP = () => {
	const [formSuccess, setFormSuccess] = useState(false);

	return (
		<section className={styles.container} style={{position:'relative'}}>
            {
                formSuccess && <div style={{
                    position:'absolute',
                    top:0,
                    left:0,
                    width:'100%',
                    height: '100%',
                    background:'rgba(255,255,255,.8)',
                    zIndex:55,
                    display:'grid',
                    placeItems:'center',
                    color: 'green',
                    fontSize:22
                }}>
                    RSVP Submitted
                </div>
            }
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
					onSubmit={({ guest1, guest2, guest3, guest4, day1, day2 }) => {
						const names = `${guest1} ${guest2} ${guest3} ${guest4}`;
						const data = {
							to: 'andywiolawedding@outlook.com',
							from_name: names,
							names: names,
							day1: day1,
							day2: day2,
						};
						emailjs
							.send(
								'service_ninau4u',
								'template_9k2pi3a',
								data,
								'kJerNjVPBD8xfpOqo'
							)
							.then((response) => {
								if(response.text === 'OK') {
                                    setFormSuccess(true)
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
									<h6 className={styles['sub-title']}>Day 1</h6>
									<FormCheckbox
										context={context}
										name={'day1'}
										options={day1Options}
									/>

									<h6 className={styles['sub-title']}>Day 2</h6>
									<FormCheckbox
										context={context}
										name={'day2'}
										options={day2Options}
									/>

									<div>
										<Button
											type="submit"
											disabled={formSuccess}
											variant="secondary w-100"
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
export default RSVP;
