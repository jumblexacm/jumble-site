import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
