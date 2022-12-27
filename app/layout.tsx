import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark:">
      <head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/sde6xji.css"
        ></link>
      </head>
      <body className="bg-white dark:bg-gray-dark">{children}</body>
    </html>
  );
}
