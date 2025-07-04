export default function Home() {
  return (
    <div className=" bg-gray-900 text-slate-200 h-screen p-8 ">
      <h1 className="flex items-center text-3xl sm:text-4xl md:text-5xl text-amber-400 font-bold before:w-0.5 before:h-4 before:bg-amber-100 gap-2 before:rounded-md ">
        Hello Tailwind
      </h1>
      <p>Aprendendo a utilizar a ferramenta</p>

      <button
        // disabled
        className="bg-gray-600 px-2 py-1 mt-4 rounded-md font-medium cursor-pointer transition-colors enabled:hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Sign In
      </button>
    </div>
  );
}
