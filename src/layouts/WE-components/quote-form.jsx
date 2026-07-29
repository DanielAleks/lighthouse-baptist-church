// import { useState } from "react";
// import { Phone, ChevronLeft } from "lucide-react";

// const NAVY = "#0b3a54";
// const CORAL = "#f0897d";
// const CORAL_DARK = "#ec7266";

// const SERVICES = [
//   "Electrical Repair",
//   "Panel Upgrade",
//   "New Installation",
//   "Inspection",
// ];

// export default function QuoteForm() {
//   const [step, setStep] = useState(1);
//   const [zip, setZip] = useState("");
//   const [service, setService] = useState("");
//   const [urgency, setUrgency] = useState("");
//   const [contact, setContact] = useState({ name: "", phone: "" });
//   const totalSteps = 4;

//   const canContinue =
//     (step === 1 && zip.trim().length === 5) ||
//     (step === 2 && service) ||
//     (step === 3 && urgency) ||
//     (step === 4 && contact.name.trim() && contact.phone.trim());

//   const next = () => setStep((s) => Math.min(s + 1, totalSteps + 1));
//   const back = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#eef1f3" }}>
      {/* Header image band */}
      <div className="relative w-full" style={{ backgroundColor: NAVY }}>
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="w-full h-40 object-cover opacity-90"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(11,58,84,0.1) 0%, rgba(11,58,84,0.55) 100%)" }}
        />
      </div>

      {/* Card */}
      <div className="flex-1 flex items-start justify-center px-4 -mt-6">
        <div
          className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 mt-2"
          style={{ boxShadow: "0 10px 30px rgba(11,58,84,0.15)" }}
        >
          {step <= totalSteps ? (
            <>
              {step > 1 && (
                <button
                  onClick={back}
                  className="flex items-center gap-1 text-sm mb-3 -ml-1"
                  style={{ color: NAVY }}
                >
                  <ChevronLeft size={16} /> Back
                </button>
              )}

              <h1
                className="text-3xl font-extrabold text-center mb-3"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                Get a Free Quote
              </h1>

              <p className="text-center mb-6" style={{ color: "#5b7180" }}>
                {step === 1 &&
                  "Start with your ZIP code to confirm we serve your area, then answer a few quick questions and we'll get you a fast, upfront quote."}
                {step === 2 && "What kind of electrical work do you need?"}
                {step === 3 && "How soon are you looking to get this done?"}
                {step === 4 && "Last step — where should we send your quote?"}
              </p>

              {/* Progress bar */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${(step / totalSteps) * 100}%`,
                      backgroundColor: NAVY,
                    }}
                  />
                </div>
                <span className="text-sm font-semibold whitespace-nowrap" style={{ color: NAVY }}>
                  Step {step} of {totalSteps}
                </span>
              </div>

              {/* Step content */}
              {step === 1 && (
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  placeholder="Enter your ZIP code"
                  value={zip}
                  onChange={(e) => setZip(e.target.value.replace(/\D/g, ""))}
                  className="w-full border-2 rounded-full px-5 py-4 text-center text-lg tracking-widest outline-none mb-6"
                  style={{ borderColor: NAVY, color: "#3a4b56" }}
                />
              )}

              {step === 2 && (
                <div className="flex flex-col gap-3 mb-6">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setService(s)}
                      className="w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-colors"
                      style={{
                        borderColor: service === s ? NAVY : "#d8dee2",
                        backgroundColor: service === s ? "#eaf1f4" : "white",
                        color: NAVY,
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-3 mb-6">
                  {["Emergency (ASAP)", "Within a week", "This month", "Just researching"].map(
                    (u) => (
                      <button
                        key={u}
                        onClick={() => setUrgency(u)}
                        className="w-full text-left px-5 py-4 rounded-xl border-2 font-medium transition-colors"
                        style={{
                          borderColor: urgency === u ? NAVY : "#d8dee2",
                          backgroundColor: urgency === u ? "#eaf1f4" : "white",
                          color: NAVY,
                        }}
                      >
                        {u}
                      </button>
                    )
                  )}
                </div>
              )}

              {step === 4 && (
                <div className="flex flex-col gap-3 mb-6">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    className="w-full border-2 rounded-full px-5 py-4 outline-none"
                    style={{ borderColor: NAVY, color: "#3a4b56" }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    className="w-full border-2 rounded-full px-5 py-4 outline-none"
                    style={{ borderColor: NAVY, color: "#3a4b56" }}
                  />
                </div>
              )}

              <button
                disabled={!canContinue}
                onClick={next}
                className="w-full rounded-full py-4 text-lg font-bold text-white transition-opacity"
                style={{
                  backgroundColor: CORAL,
                  opacity: canContinue ? 1 : 0.5,
                }}
                onMouseDown={(e) => (e.currentTarget.style.backgroundColor = CORAL_DARK)}
                onMouseUp={(e) => (e.currentTarget.style.backgroundColor = CORAL)}
              >
                {step === totalSteps ? "Get My Quote" : "Continue"}
              </button>
            </>
          ) : (
            <div className="text-center py-6">
              <h2 className="text-2xl font-extrabold mb-2" style={{ color: NAVY, fontFamily: "Georgia, serif" }}>
                You're all set, {contact.name.split(" ")[0] || "there"}!
              </h2>
              <p style={{ color: "#5b7180" }} className="mb-6">
                A member of our team will text or call you at {contact.phone || "your number"} shortly
                with your upfront quote for {service || "your project"}.
              </p>
              <button
                onClick={() => {
                  setStep(1);
                  setZip("");
                  setService("");
                  setUrgency("");
                  setContact({ name: "", phone: "" });
                }}
                className="text-sm font-semibold underline"
                style={{ color: NAVY }}
              >
                Start over
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Sticky call banner */}
      <a
        href="tel:2532345359"
        className="mt-8 flex items-center justify-center gap-3 py-4 text-white font-bold text-lg"
        style={{ backgroundColor: "#e2321f" }}
      >
        <Phone size={20} fill="white" />
        Tap To Call (253) 234-5359
      </a>
    </div>
  );
}
