import "./globals.css";

export const metadata = {
  title: "Product Studio",
  description: "Turn product photos and videos into marketing images, clips and music with Floyo workflows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
