import { FC } from 'react'
import { Field, ErrorMessage } from 'formik'
// import { SelectOption } from '../../Form.interface'
// import FieldLabel from '../FieldLabel/FieldLabel'
import styles from './FormCheckboxes.module.scss'

interface SelectOption {
  value: string,
  id: string,
  label: string
}

interface FormCheckboxProps {
  name: string;
  label?: string;
  context: any;
  options: SelectOption[];
}

const FormCheckbox: FC<FormCheckboxProps> = ({ name, label, context, options }) => {

  if(!context) return <></>
	const { errors, touched } = context;
	const hasError = errors[name] !== null & touched[name];

  return (
    <div className={styles.container}>
      {/* <FieldLabel label={label} className={styles.label} /> */}
      
      <div className={styles.checkboxes} role="group" aria-labelledby="checkbox-group">
        {
              options.map((option) => {
                const { value, id, label: optionLabel } = option
                return (
                  <div key={`check_${id}`} className={styles['checkbox-container']}>
                    <label className={styles['check-label']} htmlFor={`check_${id}`}>
                     <div dangerouslySetInnerHTML={{__html: optionLabel}}></div>
                      <Field
                        type="radio"
                        name={name}
                        value={value}
                        id={`check_${id}`}
                        className={styles.checkbox}
                      />
                      <span className={styles.check} />
                    </label>
                  </div>
                )
              })
          }
  
          <ErrorMessage
          className={styles['input-error-message']}
          component="div"
          name={name as string}
        />
      </div>
  
    </div>
  )
}

export default FormCheckbox
