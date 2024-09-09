import classNames from 'classnames';
import Sidebar from '~/layouts/DefaultLayout/Sidebar';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div className={classNames(styles.wrapper)}>
            <Header />
            <div className={classNames(styles.container)}>
                <Sidebar />
                <div className={classNames(styles.content)}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
