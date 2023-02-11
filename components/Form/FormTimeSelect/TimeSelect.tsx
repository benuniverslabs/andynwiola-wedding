import { FC } from 'react'
import { SelectOption } from '../../Form.interface'
import FormSelect from '../FormSelect/FormSelect'
import styles from './TimeSelect.module.scss'

interface TimeSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
}

const options: SelectOption[] = [
  { id: '1', value: 'any', label: 'Any Time' },
  { id: '2', value: 'am', label: 'Morning' },
  { id: '3', value: 'pm', label: 'Afternoon' }
]

export const TimeSelect: FC<TimeSelectProps> = ({
  name,
  label,
  placeholder,
  className
}: TimeSelectProps) => (
  <FormSelect
    className={className}
    name={name}
    label={label}
    placeholder={placeholder}
    options={options}
    icon="#form-time"
    iconStyles={styles.icon}
  />
)
