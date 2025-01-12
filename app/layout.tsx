import './globals.css';

export const metadata = {
  title: 'lelgallery photo directory',
  description: 'A photo gallery with lightbox feature and dark mode',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}

