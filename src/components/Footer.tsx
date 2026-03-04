import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">

        <div className="flex justify-center space-x-6 md:order-2">
          {/* Social icons */}
          <a href="#" className="text-slate-400 hover:text-slate-500">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        <div className="mt-8 md:order-1 md:mt-0 flex gap-6 items-center flex-col md:flex-row justify-center md:justify-start">
          <div className="text-slate-900">
            <Logo className="w-24 shrink-0" />
          </div>
          <p className="text-center text-sm leading-5 text-slate-500">
            &copy; {new Date().getFullYear()} Low Automations.
          </p>
          <div className="bg-slate-100 px-2.5 py-1 rounded-md text-xs font-semibold text-slate-600">
            Modelo AI-First
          </div>
        </div>

      </div>
    </footer>
  )
}
