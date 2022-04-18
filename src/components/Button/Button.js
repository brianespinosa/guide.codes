import { Button as AriakitButton } from 'ariakit/button';
import styles from './Button.module.scss';

const Button = ({ children, ...rest }) => {
  return (
    <AriakitButton {...rest} className={styles._}>
      {children}
    </AriakitButton>
  );
};

export default Button;
