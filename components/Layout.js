import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';
import { calculateObjectSize } from 'bson';

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 192px)' }}>{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
