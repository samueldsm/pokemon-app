"use client";

import { QueryClient, QueryClientProvider } from "react-query";

import { Providers } from "@/app/providers";

const queryClient = new QueryClient();

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
        <div className="relative flex flex-col h-screen">
          <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
            {children}
          </main>
        </div>
      </Providers>
    </QueryClientProvider>
  );
}
