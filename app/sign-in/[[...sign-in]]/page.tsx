import { SignIn } from "@clerk/nextjs";

import "@/styles/sign-pages.css"

export default function Page() {
  return (
    <div className="sign-root">
      <h1 className="sign-header-text">Sign In Page</h1>
      <SignIn path="/sign-in" />
    </div>
  );
}