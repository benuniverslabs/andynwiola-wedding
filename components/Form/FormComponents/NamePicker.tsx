import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import { ErrorMessage, Field, useFormikContext } from 'formik';

const NamePicker = () => {
	const context = useFormikContext();
	console.log(context);

	const [showMore, setShowMore] = useState(false);

	return (
		<div className="mb-4">
			<label className="mb-2" htmlFor="exampleFormControlInput1">
				Names
			</label>
			<FormInput name="guest1" key="guest1" context={context} />

			<FormInput name="guest2" key="guest2" context={context} />

			{showMore && (
				<>
					<FormInput name="guest3" key="guest3" context={context} />

					<FormInput name="guest4" key="guest4" context={context} />
				</>
			)}

			{!showMore && (
				<a
					style={{ display: 'block', color: '#2838C8', textAlign: 'center' }}
					type="button"
					onClick={() => setShowMore(true)}
				>
					Add More Names
				</a>
			)}
		</div>
	);
};

export default NamePicker;
