interface NavbarItem {
  to: string;
  label: string;
}
const links :NavbarItem[]= [
  { to: "/", label: "Home" },
  {to: "/shop", label: "Shop" },
  {to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export {links};
