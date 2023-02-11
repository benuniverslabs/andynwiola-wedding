import classNames from 'classnames'
import { ErrorMessage, Field } from 'formik'
import { FC } from 'react'
import { SelectOption } from '../../Form.interface'
import FieldLabel from '../FieldLabel/FieldLabel'
import styles from './FormRadio.module.scss'

interface FormRadioProps {
  name: string;
  label?: string;
  options: SelectOption[];
  className?: string;
}

const FormRadio: FC<FormRadioProps> = ({ name, label, options, className }) => (
  <div className={classNames(styles.container, className)}>
    <FieldLabel className={styles.label} label={label} />
    <div
      className={styles.radios}
      role="group"
      aria-labelledby="checkbox-group"
    >
      {options.map((option) => {
        const { value, id, label: optionLabel } = option
        return (
          <div key={`radio_${id}`}>
            <Field
              type="radio"
              name={name}
              value={value}
              id={`radio_${id}`}
              className={styles.radio}
            />
            <label
              className={styles['radio-label']}
              htmlFor={`radio_${id}`}
            >
              {optionLabel}
            </label>
          </div>
        )
      })}
    </div>
    <ErrorMessage
      className={styles['input-error-message']}
      component="div"
      name={name}
    />
  </div>
)

export default FormRadio
