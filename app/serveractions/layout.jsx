export default function FormLayout({ children }) {
  return (
    <div className="bg-gray-200 px-5">
      <div className="mx-auto rounded bg-white max-w-5xl px-5 min-h-[100dvh]">
        {children}
      </div>
    </div>
  );
}
