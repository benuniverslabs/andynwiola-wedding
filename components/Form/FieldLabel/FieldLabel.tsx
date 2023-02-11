import cn from 'classnames'
import { FC } from 'react'
import styles from './FieldLabel.module.scss'

interface FieldLabelProps {
  label?: string;
  optional?: boolean;
  className?: string;
}

const FieldLabel: FC<FieldLabelProps> = ({ label, optional, className }) => (
  <div className={cn(styles.container, className)}>
    <span className={styles['input-label']}>{label}</span>
    { optional !== undefined && optional && <span className={styles['input-label-optional']}>(optional)</span>}
  </div>
)

export default FieldLabel
