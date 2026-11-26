"use client";

import { useFormStatus } from "react-dom";

/**
 * pending status ta dekte pari
 * @returns
 */

export default function Button() {
  const { pending } = useFormStatus(); // jotokkhon porjonto form ta submit hocche totokkhon porjonto pending true

  return (
    <button
      disabled={pending}
      type="submit"
      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#00d9e8] via-[#00efa3] to-[#b6ff3b] p-[1px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,245,255,0.3)] hover:-translate-y-1 active:translate-y-0"
    >
      <span className="relative flex items-center justify-center gap-3 rounded-xl bg-[#0b2420] px-6 py-5 text-sm font-black tracking-[0.2em] text-[#a3ffcb] transition-colors duration-300 group-hover:bg-transparent group-hover:text-[#03120d]">
        {pending ? "SUBMITTING" : "CREATE IDENTITY"}
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </span>
    </button>
  );
}
