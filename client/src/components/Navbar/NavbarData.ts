interface NavbarItem {
  to: string;
  label: string;
}
const links :NavbarItem[]= [
  { to: "/", label: "Home" },
  {to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export {links};
