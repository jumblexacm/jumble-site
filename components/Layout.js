import Navbar from './Navigation/Navbar';

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
