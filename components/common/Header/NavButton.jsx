import { Button } from "@/components/ui/button";
import Link from "next/link";

function NavButton() {
  return (
    <Button
      asChild
      className="bg-orange-500 hidden md:block text-base text-white"
    >
      <Link href="/contact">Contact Us</Link>
    </Button>
  );
}

export default NavButton;
