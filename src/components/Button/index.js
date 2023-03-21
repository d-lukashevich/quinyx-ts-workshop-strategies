import styles from './styles.module.scss';

export const Button = ({ className, ...props }) => {
    return <button {...props} className={styles.button} />;
};
