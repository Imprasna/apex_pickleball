import { ReactNode, useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Loader from './Loader';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="min-h-screen">
            {loading ? (
                <Loader />
            ) : (
                <div className="min-h-screen">
                    <Header />
                    {children}
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Layout;