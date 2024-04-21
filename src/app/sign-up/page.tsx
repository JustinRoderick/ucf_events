import SignUp from "./sign-up";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="mx-auto flex min-h-screen flex-col items-center justify-center">
        <SignUp />
      </div>
    </main>
  );
}
