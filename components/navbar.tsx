import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import { getCategories } from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import NavBarMobile from "./navbar-mobile";

// Para eliminar todo o cache
export const revalidate = 0;

export default async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="border-b dark:border-[hsl(var(--border))]">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href={"/"} className="ml-4 lg:ml-0 gap-x-2 hidden md:flex">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <NavBarMobile categories={categories} />
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
}
