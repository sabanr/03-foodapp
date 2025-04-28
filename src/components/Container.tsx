import React, { ReactNode } from 'react';

import styles from './Container.module.css';

interface IContainerProps {
	children: ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
	return <div className={styles.parentContainer}>{children}</div>;
};
export default Container;
