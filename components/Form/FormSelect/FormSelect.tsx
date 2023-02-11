import { FC } from 'react'
import { ErrorMessage, Field } from 'formik'
import classNames from 'classnames'
import styles from './FormSelect.module.scss'
import { SelectOption } from '../Form.interface';

interface FormSelectProps {
  name: string;
  label?: string;
  options: SelectOption[];
  icon?: string;
  iconStyles?: string;
  placeholder?: string;
  className?: string;
}

const FormSelect: FC<FormSelectProps> = ({
  name,
  label,
  options,
  placeholder,
  icon,
  iconStyles,
  className
}) => (
  <div className={classNames(styles.container, className)}>
    <label htmlFor={name}>
      <div className={styles.selectbox}>
        <Field className={styles.input} as="select" id={name} name={name}>
          {placeholder && (
            <option value="" disabled selected hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => {
            const { id, value, label: optionLabel } = option
            return (
              <option key={id} value={value}>
                {optionLabel}
              </option>
            )
          })}
        </Field>
       
      </div>
    </label>
    <ErrorMessage
      className={styles['input-error-message']}
      component="div"
      name={name}
    />
  </div>
)

export default FormSelect
