"use client";

export default function ConsultationForm() {
  return (
    <div className="lg:col-span-7 border-2 border-white p-10">
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="fullName"
            className="label-text text-neutral-400 mb-2 block"
          >
            Full Name <span className="text-white">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your name"
            autoComplete="name"
            className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 placeholder:italic focus:border-[3px] focus:outline-none body-text"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="label-text text-neutral-400 mb-2 block"
          >
            Email Address <span className="text-white">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            autoComplete="email"
            className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 placeholder:italic focus:border-[3px] focus:outline-none body-text"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="phone"
            className="label-text text-neutral-400 mb-2 block"
          >
            Phone Number <span className="text-white">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            autoComplete="tel"
            className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 placeholder:italic focus:border-[3px] focus:outline-none body-text"
            required
          />
        </div>

        <div>
          <label
            htmlFor="experience"
            className="label-text text-neutral-400 mb-2 block"
          >
            Experience Level <span className="text-white">*</span>
          </label>
          <select
            id="experience"
            name="experience"
            className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none focus:border-[3px] focus:outline-none text-white body-text"
            required
          >
            <option value="" className="text-neutral-500 italic">
              Select level
            </option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <label
            htmlFor="telegram"
            className="label-text text-neutral-400 mb-2 block"
          >
            Telegram Username{" "}
            <span className="text-neutral-500">(optional)</span>
          </label>
          <input
            id="telegram"
            name="telegram"
            type="text"
            placeholder="@username"
            autoComplete="off"
            className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 placeholder:italic focus:border-[3px] focus:outline-none body-text"
          />
        </div>

        <div>
          <label
            htmlFor="network"
            className="label-text text-neutral-400 mb-2 block"
          >
            Current CPA Network{" "}
            <span className="text-neutral-500">(optional)</span>
          </label>
          <input
            id="network"
            name="network"
            type="text"
            placeholder="e.g. OGAds, CPAGrip"
            className="w-full bg-transparent border-b-2 border-white p-2 pb-4 outline-none placeholder:text-neutral-500 placeholder:italic focus:border-[3px] focus:outline-none body-text"
          />
        </div>
      </div>

      <div className="border-t border-white pt-10">
        <div className="flex justify-between items-center flex-wrap gap-8 mb-10">
          <div>
            <div className="label-text text-neutral-400 mb-2">
              Consultation Fee
            </div>

            <div className="display-font text-6xl font-bold">₹499</div>
          </div>

          <button
            type="submit"
            className="btn-primary px-10 py-5 text-sm focus-visible:outline focus-visible:outline-3 focus-visible:outline-white focus-visible:outline-offset-3"
          >
            Pay With Razorpay →
          </button>
        </div>

        <div className="border-t border-white pt-6 text-sm leading-relaxed text-neutral-500 body-text">
          If the consultation does not meet expectations, additional support
          guidance will be provided through Telegram and WhatsApp.
        </div>
      </div>
    </div>
  );
}