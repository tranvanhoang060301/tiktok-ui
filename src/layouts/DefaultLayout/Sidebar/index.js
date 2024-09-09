import classNames from 'classnames';
import styles from './Sidebar.module.scss';

function Sidebar() {
    return (
        <div className={classNames(styles.wrapper)}>
            <h2>Sidebar page</h2>
        </div>
    );
}

export default Sidebar;
