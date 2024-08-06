import { Providers } from "./providers";

export const metadata = {
  title: "Draftland",
  description: "Draftland",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
