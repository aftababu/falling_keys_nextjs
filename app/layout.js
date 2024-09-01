import { Lato } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const lato = Lato({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: "key falling",
  description: "learn typing with accurecy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className + " 2xl:w-[2000px] mx-auto mb-1"}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
