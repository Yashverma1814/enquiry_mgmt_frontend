// app/layout.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Providers } from './providers'

const queryClient=new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body>
        <QueryClientProvider client={queryClient}>
        <Providers>{children}</Providers>
        </QueryClientProvider>
      </body>
    </html>
  )
}