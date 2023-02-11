import {
  ErrorMessage,
  Field,
  useFormikContext
} from 'formik'
import { FieldProps } from '../../Form.interface'
import styles from './FormHidden.module.scss'

const FormHidden = <T extends unknown>({
  name,
  ...props
}: FieldProps<T>): JSX.Element => {
  const { errors, touched } = useFormikContext<T>()
  const hasError = (errors[name] !== null && touched[name])

  return (
    <>
      <Field
        type="hidden"
        name={name}
        id={name}
        aria-invalid={hasError}
          // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
      <ErrorMessage
        className={styles['input-error-message']}
        component="div"
        name={name}
      />
    </>
  )
}

export default FormHidden
