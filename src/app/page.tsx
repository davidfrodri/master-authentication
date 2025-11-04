import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
   <div className="my-6 px-4 max-w-md mx-auto">
    <h1 className="text-3xl font-bold">Welcome to auth app</h1>
    <Button asChild size="lg">
      <Link href="/auth/login">Sign In / Sign Up</Link>
    </Button>
   </div>
  );
}
