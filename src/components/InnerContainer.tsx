import React, { ReactNode } from 'react';

interface IInnerContainerProps {
	children: ReactNode;
}

import styles from '../styles/InnerContainer.module.css';

const InnerContainer: React.FC<IInnerContainerProps> = ({ children }) => {
	return <div className={styles.innerContainer}>{children}</div>;
};
export default InnerContainer;
