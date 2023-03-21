import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

interface FrameProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  heading: string;
  description: ReactNode;
  pros?: string[];
  cons?: string[];
}

const Col = ({ list, isNegative = false }: { list: string[]; isNegative?: boolean }) => {
  return (
    <ul className={classNames(styles.col, isNegative && styles.col_negative)}>
      {list.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export const Frame = ({ className, heading, children, pros, cons, description, ...props }: FrameProps) => {
  return (
    <div className={classNames(className, styles.frame)} {...props}>
      <h2>{heading}</h2>
      <em>{description}</em>
      {(pros || cons) && (
        <div className={styles.split}>
          {pros && <Col list={pros} />}
          {cons && <Col list={cons} isNegative />}
        </div>
      )}
      <div className={styles.pan}>{children}</div>
    </div>
  );
};
