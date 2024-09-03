import '../styles/globals.css';
import Header from '../components/Header';
import Breadcrumb from '../components/Breadcrumb';

export const metadata = {
  title: 'PaDi UMKM',
  description: 'Product Comparison',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Breadcrumb />
        <main className="p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
