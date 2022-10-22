import React from 'react';
import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img src="https://media.istockphoto.com/photos/woman-lifestyle-picture-id1317200799" alt="avatar" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>DinhTrongLam</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </p>
                <span className={cx('user-name')}>lam@1234</span>
            </div>
        </div>
    );
}

export default AccountItem;
