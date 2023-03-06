// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://64.media.tumblr.com/0720d562319a714c020710344ed67383/84bd6032ff13f728-fa/s1280x1920/085d228f71280869ce592e242cc1173c4a7c225f.jpg"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>thangvu2325</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Vũ Đức Thắng</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}> Followers</span>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}> Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
