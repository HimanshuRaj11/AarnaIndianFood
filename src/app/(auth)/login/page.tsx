import LoginForm from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zinc-950 px-4 select-none">
      {/* Decorative background visual elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/[0.03] blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-orange-600/[0.03] blur-3xl pointer-events-none"></div>

      <div className="z-10 w-full flex justify-center">
        <LoginForm />
      </div>
    </div>
  );
}
