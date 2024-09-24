import LoginContent from "@/components/modules/auth/LoginContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Sign in to your Pokémon account to access the dashboard and explore the amazing world of Pokémon.",
  keywords: "pokemon, login, dashboard, pokedex, pokemon info",
};
export default function LoginPage() {
  return <LoginContent />;
}
