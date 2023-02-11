import React, { FC } from 'react'
import { FormInput } from '..'
import styles from './FieldPicker.module.scss'

interface FieldPickerProps {
  type: 'date' | 'time';
  className?: string;
  name: string;
  placeholder?: string;
  label?: string;
  optional?: boolean;
  disableErrors?: boolean;
}

export const DatePicker: FC<FieldPickerProps> = (
  props
) => {
  const showPicker = (e: React.FormEvent): void => (e?.target as HTMLInputElement).showPicker()
  

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <FormInput context={null} iconStyles={styles.icon} icon="#form-datepicker" onClick={showPicker} {...props} />
}
