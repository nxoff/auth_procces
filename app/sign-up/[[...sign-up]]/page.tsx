import { SignUp } from "@clerk/nextjs";

import "@/styles/sign-pages.css"

export default function Page() {
  return (
    <div className="sign-root">
      <h1 className="sign-header-text">Sign Up Page</h1>
      <SignUp path="/sign-up" />
    </div>
  );
}