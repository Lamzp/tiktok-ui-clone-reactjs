import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '~/components/layout/components/Header';
import Sidebar from '~/components/layout/components/Sidebar';

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </main>
        </div>
    );
};

export default DefaultLayout;
