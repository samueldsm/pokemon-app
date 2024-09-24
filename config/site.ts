export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Pokémon-App",
  description: "Explore the world of Pokémon!",
  navItems: [
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Dashboard",
      href: "/",
    },
  ],
  links: {
    pokeapi: "https://pokeapi.co/api/v2/pokemon/",
  },
};
