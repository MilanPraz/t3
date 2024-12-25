import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b-2 border-white px-10 py-4">
      <div>Gallery-Boot</div>

      {/* only gonna render the thing inside it if user is not logged in */}
      <div>
        <SignedOut>
          <SignInButton />
          {/* <Link href={"/signin"}>Sign In</Link> */}
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-4">
            <Link
              href={"/quote"}
              className="font-semibold text-white underline underline-offset-2"
            >
              Post A Quote
            </Link>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
};

// export const UserButton = () => {
//   return (
//     <div>
//       <h2 className="rounded-full border-2 border-white p-2 text-white">M</h2>
//     </div>
//   );
// };
