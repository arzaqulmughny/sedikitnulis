import Link from "next/link";

export const footerLinks = [
  {
    label: "Tentang",
    href: "/about",
  },
  {
    label: "Panduan",
    href: "/guides",
  },
  {
    label: "Privasi",
    href: "/privacy",
  },
  {
    label: "Ketentuan",
    href: "/terms",
  },
];

const Footer = () => {
  return (
    <footer>
      <ul className="flex gap-x-4">
        {footerLinks.map((footer, index) => (
          <li key={index}>
            <Link href="/about">
              <p className="text-xs text-paragraph">{footer.label}</p>
            </Link>
          </li>
        ))}

        <li>
          <p className="text-xs text-paragraph">© 2026 SedikitNulis</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
