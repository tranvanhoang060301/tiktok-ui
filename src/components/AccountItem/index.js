import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.css';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/6419d419e03f5bafe0594938c62a677f~c5_720x720.jpeg?lk3s=a5d48078&nonce=65755&refresh_token=d5281017d36ce3fce87b2f0e781c3c65&x-expires=1718269200&x-signature=NdoJ3nhuIryySVpjeJ%2BaWiebTwQ%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoang"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Tran Van Hoang</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>tranvanhoang</span>
            </div>
        </div>
    );
}

export default AccountItem;
