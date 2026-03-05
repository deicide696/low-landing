import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">

        <div className="mt-8 md:mt-0 flex gap-6 items-center flex-col md:flex-row justify-center md:justify-start">
          <div className="text-slate-900 flex items-center h-12">
            <Logo className="w-24 shrink-0" imgClassName="object-contain w-full h-full" />
          </div>
          <p className="text-center text-sm leading-5 text-slate-500">
            &copy; {new Date().getFullYear()} Low Automations - Legion of Workers.
          </p>
          <div className="bg-slate-100 px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600">
            AI-First Model
          </div>
        </div>

      </div>
    </footer>
  )
}
