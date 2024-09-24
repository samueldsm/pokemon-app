import { Metadata } from "next";

import DashboardContent from "@/components/modules/dashboard/DashboardContent";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Explore detailed information about your favorite Pokémon, browse the Pokédex, and discover new Pokémon.",
  keywords:
    "pokemon, dashboard, pokedex, pokemon info, stats, types, abilities",
};
export default function DashboardPage() {
  return <DashboardContent />;
}
