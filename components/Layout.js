import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';
import { calculateObjectSize } from 'bson';

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      <div
        // Makes sure the footer is always at the bottom of the screen
        style={{ minHeight: 'calc(100vh - 192px)', backgroundColor: '#e5e7eb' }}
      >
        {children}
      </div>
      <Footer />
    </main>
  );
}

export default Layout;
