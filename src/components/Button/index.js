import styles from './styles.module.scss';
import PropTypes from 'prop-types';

export const Button = ({ className, color, backgroundColor, fontSize = '1rem', ...props }) => {
  return (
    <button
      {...props}
      style={{
        fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
        backgroundColor,
        color
      }}
      className={styles.button}
    />
  );
};

Button.prorTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
