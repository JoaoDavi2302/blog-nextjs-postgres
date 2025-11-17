import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="w-full bg-[#282828] text-[#ebdbb2] py-4">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold tracking-wide">Meu Blog</h1>

        <nav className="flex gap-6">
          <a href="#" className="hover:text-[#fe8019] transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-[#fe8019] transition-colors">
            Posts
          </a>
          <a href="#" className="hover:text-[#fe8019] transition-colors">
            Contato
          </a>
        </nav>
        </div>
        </header>
        {children}
      </body>
    </html>
  );
}
