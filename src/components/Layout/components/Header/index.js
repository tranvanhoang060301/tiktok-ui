import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './Header.module.scss';
import images from '~/assets/images';

function Header() {
    return (
        <header className={classNames(styles.wrapper)}>
            <div className={classNames(styles.inner)}>
                <div className={classNames(styles.logo)}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <div className={classNames(styles.search)}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    {/* spellCheck laf check chính tả */}
                    <button className={classNames(styles.clear)}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={classNames(styles.loading)} icon={faSpinner} />

                    <button className={classNames(styles.searchBtn)}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={classNames(styles.action)}></div>
            </div>
        </header>
    );
}

export default Header;
