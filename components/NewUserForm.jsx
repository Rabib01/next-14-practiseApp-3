import { addUser } from "@/actions/user";
import Button from "./ui/Button";

{
  /**
   * see the LWS playlist on call action and bind - this is on the this keyowrd tutrial
   * start watching from explicit bind
   * addUser.nind()
   * we can explicitly call a function in JS
   * addUser() -> another way to call this function explicitly is addUser.call()
   * the advantage of explicitly doing it like this we can tell in the first parameter of .call() what the this keyowrd would be
   * const sakib = {name:"sakib",age:36}
   * function getAge(){return this.age}
   * where would this come from ?
   * getAge.call(Sakib) - just pointers - sakib does not have a getAge function and we cannot do sakib.getAge
   * so we do getAge.call(Sakib) - now the this is going to point to sakib
   * getAge is in the global scope
   * we can also do this
   * getAge.call(Sakib, param1) and this param1 will go directly to the function getAge(param1){}
   * this is what .call()
   *
   * another version of call is bind
   * getAge().bind(sakib); the only different is that this returns and instance of the function and on the previosus example that function was executed instantanusly
   * when we use bind it will itself return a function
   * const getAgeWithSakib = getAge().bind(sakib)
   * now we can do getAgeWithSakib()
   *
   * const addUserWithFlag = addUser.bind();
   * this will return a new function
   * we do not have any issues with this keyword here and so I am giving it as null
   * now the new function is addUserWithFlag
   */
}

{
  /**
   * One other way we could have done this  is that :
   * after the opening of hte form tag e
   * <input type="hidden name="flag" value=pro/>
   * ei khetre amader bind tind er kono jhamela mnai
   * we could have gooten this again on the serverAction as const flag = formData.get(flag)
   */
}

{
  /**
   * formState and hooks are a client component stuffs and so wee cannot use them !
   * s0, do we turn the entire form component into a client component ?
   * there are a lot of tricks in next js
   * jototuku jaiga amader client component dorkar sudhu tototuku jaiga ami client component rakhbo
   * for this case we only are concerned with the submit button only !
   *
   */
}

export default function NewUserForm() {
  // modifying the action here - parameter ala function bananor jonno amra ei kaaj ta kortesi !

  const addUserWithFlag = addUser.bind(null, "pro");

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030b0c] text-white flex items-center justify-center px-5 py-20">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[900px] h-[900px] -top-[450px] left-1/2 -translate-x-1/2 rounded-full blur-[130px] opacity-20 bg-[conic-gradient(from_0deg,#00f5ff,#a3ff12,#00ffa3,#007d83,#00f5ff)] animate-[spin_22s_linear_infinite]" />

        <div className="absolute w-[650px] h-[650px] -bottom-[400px] -left-[200px] rounded-full blur-[130px] opacity-15 bg-[#00ffa3] animate-pulse" />

        <div className="absolute w-[500px] h-[500px] -top-[200px] -right-[200px] rounded-full blur-[130px] opacity-10 bg-[#a3ff12]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(#00f5ff 1px, transparent 1px), linear-gradient(90deg, #00f5ff 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030b0c_100%)]" />
      </div>

      {/* PAGE CONTENT */}
      <div className="relative z-10 w-full max-w-[1100px] grid lg:grid-cols-2 items-center gap-16">
        {/* LEFT EDITORIAL SECTION */}
        <section className="hidden lg:flex flex-col justify-center space-y-10">
          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-[#a3ff12]" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-[#a3ff12] uppercase">
              Identity / 001
            </span>
          </div>

          <div className="space-y-5">
            <h1 className="text-7xl xl:text-8xl font-black tracking-[-0.075em] leading-[0.95]">
              ENTER
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#00ffa3] to-[#a3ff12]">
                THE
              </span>
              CURRENT<span className="text-[#a3ff12]">.</span>
            </h1>

            <p className="max-w-md text-slate-400 text-lg leading-relaxed">
              A new space. A new identity. A different way to experience what's
              next.
            </p>
          </div>

          {/* Decorative status panel */}
          <div className="max-w-sm border-l border-[#00f5ff]/40 pl-5 space-y-4">
            <div className="flex justify-between text-[10px] tracking-[0.25em] text-slate-500 uppercase">
              <span>System status</span>
              <span className="text-[#a3ff12]">Operational</span>
            </div>

            <div className="flex gap-1.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 flex-1 rounded-sm bg-gradient-to-t from-[#00f5ff]/10 to-[#a3ff12]/70"
                  style={{ opacity: 0.3 + (i % 5) * 0.14 }}
                />
              ))}
            </div>

            <p className="text-[10px] text-slate-600 tracking-[0.2em]">
              CONNECTION ESTABLISHED // READY FOR INPUT
            </p>
          </div>
        </section>

        {/* REGISTRATION CARD */}
        <div className="relative w-full max-w-[480px] mx-auto">
          {/* Outer rotating energy ring */}
          <div className="absolute -inset-[2px] rounded-[32px] overflow-hidden">
            <div className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,#00f5ff_0deg,#00ffa3_90deg,#a3ff12_180deg,#064e46_250deg,#00f5ff_360deg)] animate-[spin_5s_linear_infinite]" />
          </div>

          {/* Inner panel */}
          <form
            action={addUserWithFlag}
            className="relative m-[2px] rounded-[30px] bg-[#071415] p-8 sm:p-11 space-y-9 overflow-hidden"
          >
            {/* Inner ambient light */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#00f5ff]/10 blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="relative space-y-7">
              <div className="flex justify-between items-center">
                <span className="text-[10px] tracking-[0.3em] font-bold text-[#00f5ff]">
                  NEW IDENTITY
                </span>

                <span className="text-[10px] tracking-widest text-slate-600">
                  REF. 0001
                </span>
              </div>

              {/* Emblem */}
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto">
                <div className="absolute inset-0 rounded-2xl border border-[#00f5ff]/40 rotate-45 animate-[spin_12s_linear_infinite]" />

                <div className="absolute inset-2 rounded-2xl bg-gradient-to-br from-[#00f5ff]/20 to-[#a3ff12]/10 border border-[#a3ff12]/30" />

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="relative z-10 w-9 h-9 text-[#a3ff12]"
                >
                  <path d="M12 2L4 13h7l-1 9 10-13h-7l1-7z" />
                </svg>
              </div>

              <div className="text-center space-y-3">
                <h2 className="text-4xl font-black tracking-tight">
                  Initialize<span className="text-[#a3ff12]">.</span>
                </h2>

                <p className="text-sm text-slate-500">
                  Your journey begins with two details.
                </p>
              </div>
            </div>

            {/* Inputs */}
            <div className="relative space-y-6">
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="flex justify-between text-[10px] font-bold tracking-[0.25em] text-[#00f5ff] uppercase"
                >
                  Please enter the name
                  <span className="text-slate-600">01 / 02</span>
                </label>

                <div className="relative group">
                  <input
                    id="name"
                    // this name="the_name" is mandatory when we are using serveractions
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="w-full bg-[#0b2222] border border-white/[0.07] rounded-xl px-5 py-5 text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-[#00f5ff]/70 focus:ring-4 focus:ring-[#00f5ff]/10 hover:border-[#00f5ff]/30"
                  />
                  <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
                </div>
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="flex justify-between text-[10px] font-bold tracking-[0.25em] text-[#a3ff12] uppercase"
                >
                  Please enter the email
                  <span className="text-slate-600">02 / 02</span>
                </label>

                <div className="relative group">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    className="w-full bg-[#0b2222] border border-white/[0.07] rounded-xl px-5 py-5 text-white placeholder:text-slate-600 outline-none transition-all duration-300 focus:border-[#a3ff12]/70 focus:ring-4 focus:ring-[#a3ff12]/10 hover:border-[#a3ff12]/30"
                  />
                  <div className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#a3ff12] to-transparent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="relative space-y-5">
              {/* Now this is a fucking client component !  */}
              <Button />

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-[9px] tracking-[0.3em] text-slate-600">
                  SECURE ENTRY
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <p className="text-center text-[10px] text-slate-600 tracking-wider">
                BUILT FOR WHAT COMES NEXT.
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
