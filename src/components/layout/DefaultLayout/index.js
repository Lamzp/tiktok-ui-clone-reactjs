import Header from '~/components/layout/components/Header';
import Sidebar from '~/components/layout/components/Sidebar';

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
