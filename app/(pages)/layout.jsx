import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import './_globals/globals.scss';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
