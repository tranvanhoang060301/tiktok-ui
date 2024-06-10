import classNames from 'classnames';
import styles from './Header.module.scss';

function Header() {
    return (
        <header className={classNames(styles.wrapper)}>
            <div className={classNames(styles.inner)}></div>
        </header>
    );
}

export default Header;
