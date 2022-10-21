import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';

const cx = classNames.bind(styles);
const Header = () => {
    return (
        <header className={cx('primary-header')}>
            <div className={cx('container')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo Tiktok" />
                </div>
                <div className={cx('search')}>
                    <input placeholder="Search account and video...." spellCheck={false} />
                    <button className={cx('clear-icon')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('loading-icon')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}>action</div>
            </div>
        </header>
    );
};

export default Header;
