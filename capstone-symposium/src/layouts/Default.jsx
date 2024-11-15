import { Navbar } from "../components/Navbar";
import { Footer } from '../components/Footer';

export const Default = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col">
        <div id="main" className="m-0 md:my-10">
          {children}
        </div>
      </div>
      <Footer/>
    </>
  );
}
