import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';
import { useRef, useState, useEffect } from 'react';

function Layout({ children }) {
  const navbarRef = useRef(null);
  const footerRef = useRef(null);

  const [dynamicHeight, setDynamicHeight] = useState('100vh');

  // After initial render, will get height of header and footer to dynamically calculate minHeight of the inner div.
  // Will force footer to always be at the bottom regardless of inner content.
  useEffect(() => {
    setDynamicHeight(
      `calc(100vh - ${
        navbarRef.current.clientHeight + footerRef.current.clientHeight
      }px)`
    );
    console.log(dynamicHeight);
  }, [dynamicHeight]);

  return (
    // This bg-color is a temporary fix to hide the gap between OrgList and Footer
    <div className="bg-gray-200">
      <Navbar ref={navbarRef} />
      <div
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
