import "./globals.css";

export const metadata = {
  title: "Raghavendra J - Developer Portfolio",
  description:
    "A detail-oriented frontend developer with 2 years of experience specializing in React.js, Next.js, and Angular.Skilled in building performant web applications using modern frontend patterns, including hooks, context API,and custom hooks. Experienced in state management (Redux) and developing reusable, maintainable UI components. Focused on writing clean, efficient code and following best practices in testing and optimization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
