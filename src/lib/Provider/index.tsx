"use client";

import { AuthProvider } from "@/context/auth.provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
export interface ProvidersProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster />
        {children}
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default Providers;
