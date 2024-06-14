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
                src="https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/434760767_3451023955188338_7663237349930819742_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UBZUlw6cR9gQ7kNvgHXic6E&_nc_ht=scontent.fsgn5-10.fna&oh=00_AYA385_LU2cwzOP8B3NVLcjlr8Jg0jQFaNKwHnGiZ7wS_w&oe=6671F686"
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
