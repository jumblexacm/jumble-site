import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';
import { useRef, useState, useEffect } from 'react';

function Layout({ children }) {
  const navbarRef = useRef(null);
  const footerRef = useRef(null);

  const [dynamicHeight, setDynamicHeight] = useState('100vh');
  const [navbarHeight, setNavbarHeight] = useState();

  // After initial render, will get height of header and footer to dynamically calculate minHeight of the inner div.
  // Will force footer to always be at the bottom regardless of inner content.
  useEffect(() => {
    setDynamicHeight(
      `calc(100vh - ${
        navbarRef.current.clientHeight + footerRef.current.clientHeight
      }px)`
    );
    setNavbarHeight(navbarRef.current.clientHeight);
    //console.log(dynamicHeight);
  }, [dynamicHeight]);

  return (
    <div>
      <Navbar ref={navbarRef} />
      <div style={{ height: navbarHeight }} />
      <div
        className="flex flex-col"
        style={{
          minHeight: dynamicHeight,
          backgroundColor: '#f9fafb', //// #f9fafb == bg-gray-50
        }}
      >
        {children}
      </div>
      <Footer ref={footerRef} />
    </div>
  );
}

export default Layout;
