import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';
import { useRef, useState, useEffect } from 'react';

function Layout({ children }) {
  const navbarRef = useRef(null);
  const footerRef = useRef(null);

  const [minHeight, setMinHeight] = useState();

  useEffect(() => {
    setMinHeight(
      navbarRef.current.clientHeight + footerRef.current.clientHeight
    );
  }, [minHeight]);

  return (
    <main>
      <Navbar ref={navbarRef} />
      <div
        // Makes sure the footer is always at the bottom of the screen
        style={{
          minHeight: `calc(100vh - ${minHeight})`,
          backgroundColor: '#e5e7eb',
        }}
      >
        {children}
      </div>
      <Footer ref={footerRef} />
    </main>
  );
}

export default Layout;
