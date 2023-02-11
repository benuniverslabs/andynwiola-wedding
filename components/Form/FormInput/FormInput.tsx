import cn from 'classnames';
import { ErrorMessage, Field, useFormikContext } from 'formik';
import { FC } from 'react';
// import { FieldProps, TextAreaProps } from '../../Form.interface'
// import FieldLabel from '../FieldLabel/FieldLabel'
import styles from './FormInput.module.scss';

interface FieldProps {
	className?: string;
	name: string;
	type?: string;
  context: any
}

const FormikInput: FC<FieldProps> = ({
	className,
	name,
	type = 'text',
  context,
	...props
}) => {

  if(!context) return <></>
	const { errors, touched } = context;
	const hasError = errors[name] !== null & touched[name];

	return (
		<div className={styles.container}>
			<div>
				<Field
					type={type}
					name={name}
					id={name}
					className={cn([styles.input], {
						[styles['input-error']]: (hasError ?? false) && errors[name],
					})}
					aria-invalid={hasError}
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...props}
				/>
			</div>

			<ErrorMessage
				className={styles['input-error-message']}
				component="div"
				name={name as string}
			/>
		</div>
	);
};

export default FormikInput;
