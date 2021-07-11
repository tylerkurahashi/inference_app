import { useState } from "react";
import styles from './Button.module.scss';

const Button = (props:any) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const onClick = () => {
    isActive ? setIsActive(false) : setIsActive(true)
    props.isMenuDisplayed(isActive)
  }
  return (
    <div onClick={onClick}  className={styles.button}>
      <span>{!isActive ? 'Hide <' : 'Display >'}</span>
    </div>
  )
}

export default Button;