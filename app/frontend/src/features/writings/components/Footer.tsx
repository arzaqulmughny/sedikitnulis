import Link from "next/link";
import { footerLinks } from "../../home/components/Footer";

const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className=" flex flex-col lg:flex-row gap-x-12 gap-y-4 justify-center lg:justify-between items-center p-8 max-w-325 mx-auto">
          <Link href="/" className="flex items-center gap-x-2 cursor-pointer">
            <img
              src="/assets/images/sedikitnulis.png"
              alt=""
              className="w-5.5"
            />
            <p className="text-primary font-black">SedikitNulis</p>
          </Link>

          <p className="text-xs text-paragraph/70">
            © 2026 SedikitNulis. Tumbuh bersama setiap kata.
          </p>

          <ul className="flex gap-x-4">
            {footerLinks.map((footer, index) => (
              <li key={index}>
                <Link href="/about">
                  <p className="text-xs text-paragraph">{footer.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
