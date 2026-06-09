import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Modal({ isOpen, closeModal }) {




  return (

    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="relative z-50"
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

      {/* Container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-2xl bg-gray-800 p-4 shadow-xl">

          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:border-[#7EF2B1] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Company
              </label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:border-[#7EF2B1] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:border-[#7EF2B1] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Role / Opportunity
              </label>
              <input
                type="text"
                placeholder="Full Stack Developer, React Developer..."
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:border-[#7EF2B1] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">
                Message
              </label>
              <textarea
                rows="2"
                placeholder="Tell me about the opportunity..."
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white focus:border-[#7EF2B1] outline-none"
              />
            </div>

            <button
              className="
      w-full
      rounded-lg
      bg-[#7EF2B1]
      py-3
      font-semibold
      text-black
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-[0_0_25px_rgba(126,242,177,0.5)]
    "
            >
              Send Message
            </button>
          </div>
          <button
            onClick={closeModal}
            className="mt-5 rounded-lg bg-black px-4 py-2 text-white"
          >
            Close
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  );
}