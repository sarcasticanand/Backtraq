"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChevronRight, Check } from "lucide-react";
import { useSearchParams } from "next/navigation";

const schema = z.object({
  type: z.enum(["rental", "purchase"]),
  city: z.string().min(1, "Please select a city"),
  area: z.string().min(2, "Please enter an area or sector"),
  propertyType: z.string().min(1, "Please select a property type"),
  sizeSqft: z.string().optional(),
  tier: z.string().min(1, "Please select a plan"),
  date: z.string().min(1, "Please select a date"),
  timeSlot: z.string().min(1, "Please select a time slot"),
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  notes: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const renterTiers = [
  { value: "basic", label: "Basic", price: "₹1,499", desc: "40 checkpoints, photo report" },
  { value: "standard", label: "Standard", price: "₹2,499", desc: "75 checkpoints + negotiation tips", popular: true },
  { value: "premium", label: "Premium", price: "₹3,999", desc: "Thermal imaging + same-day report" },
];

const buyerTiers = [
  { value: "buyer-standard", label: "Standard", price: "₹4,999", desc: "120 points, full report" },
  { value: "buyer-premium", label: "Premium", price: "₹8,999", desc: "With structural engineer", popular: true },
  { value: "prepurchase", label: "Pre-purchase", price: "₹14,999", desc: "Compare two properties" },
];

const timeSlots = ["9:00 AM – 11:00 AM", "11:00 AM – 1:00 PM", "2:00 PM – 4:00 PM", "4:00 PM – 6:00 PM"];

const steps = [
  { label: "Property type" },
  { label: "Property details" },
  { label: "Choose plan" },
  { label: "Schedule" },
  { label: "Your details" },
];

function getMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();

  const {
    register,
    watch,
    setValue,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched",
  });

  const watchType = watch("type");
  const watchTier = watch("tier");
  const tiers = watchType === "purchase" ? buyerTiers : renterTiers;

  useEffect(() => {
    const tier = searchParams.get("tier");
    if (!tier) return;
    const isBuyer = ["buyer-standard", "buyer-premium", "prepurchase"].includes(tier);
    setValue("type", isBuyer ? "purchase" : "rental");
    setValue("tier", tier);
    setStep(2);
  }, [searchParams, setValue]);

  async function next(fields: (keyof FormData)[]) {
    const ok = await trigger(fields);
    if (ok) setStep((s) => s + 1);
  }

  async function onSubmit(data: FormData) {
    await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white border border-border rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-6">
          <Check size={28} className="text-forest" />
        </div>
        <h2
          className="text-3xl font-bold text-charcoal mb-3"
          style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
        >
          Booking received.
        </h2>
        <p className="text-muted text-lg mb-6">
          We&apos;ll WhatsApp you within 30 minutes to confirm your slot.
        </p>
        <div className="bg-cream rounded-xl p-5 text-sm text-charcoal text-left space-y-2">
          <p>✓ Check your WhatsApp for our confirmation message</p>
          <p>✓ Save our number: +91 99990 00000</p>
          <p>✓ Share the property address over WhatsApp if you have access details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden">
      {/* Progress */}
      <div className="px-8 py-5 border-b border-border">
        <div className="flex items-center gap-2">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-2 flex-1">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors ${
                  i < step
                    ? "bg-forest text-cream"
                    : i === step
                    ? "bg-terracotta text-white"
                    : "bg-cream border border-border text-muted"
                }`}
              >
                {i < step ? <Check size={12} /> : i + 1}
              </div>
              <span className={`text-xs hidden sm:block ${i === step ? "text-charcoal font-medium" : "text-muted"}`}>
                {s.label}
              </span>
              {i < steps.length - 1 && <div className="h-px bg-border flex-1 hidden sm:block" />}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="p-8">
        {/* Step 0: Type */}
        {step === 0 && (
          <div>
            <h2
              className="text-2xl font-bold text-charcoal mb-2"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              What are you inspecting?
            </h2>
            <p className="text-muted mb-8">This shapes the checklist and pricing.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { value: "rental", label: "A rental property", desc: "Moving in as a tenant", price: "From ₹1,499" },
                { value: "purchase", label: "A property I'm buying", desc: "Pre-purchase due diligence", price: "From ₹4,999" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => { setValue("type", opt.value as "rental" | "purchase"); }}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    watchType === opt.value
                      ? "border-forest bg-forest/5"
                      : "border-border hover:border-forest/40"
                  }`}
                >
                  <p className="font-bold text-charcoal mb-1">{opt.label}</p>
                  <p className="text-sm text-muted mb-3">{opt.desc}</p>
                  <p
                    className="font-bold text-forest"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {opt.price}
                  </p>
                </button>
              ))}
            </div>

            {errors.type && <p className="text-red-500 text-sm mt-3">{errors.type.message}</p>}

            <button
              type="button"
              onClick={() => next(["type"])}
              disabled={!watchType}
              className="mt-8 w-full bg-forest text-cream font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-forest-dark transition-colors disabled:opacity-40"
            >
              Continue <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Step 1: Property details */}
        {step === 1 && (
          <div>
            <h2
              className="text-2xl font-bold text-charcoal mb-2"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Tell us about the property.
            </h2>
            <p className="text-muted mb-8">We need these details to dispatch the right inspector.</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">City</label>
                <select
                  {...register("city")}
                  className="w-full border border-border rounded-xl px-4 py-3 text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                >
                  <option value="">Select city</option>
                  <option value="gurgaon">Gurgaon</option>
                  <option value="delhi">Delhi</option>
                  <option value="noida">Noida</option>
                  <option value="faridabad">Faridabad</option>
                </select>
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Area / Sector</label>
                <input
                  {...register("area")}
                  placeholder="e.g. Sector 49, DLF Phase 4, Vasant Kunj"
                  className="w-full border border-border rounded-xl px-4 py-3 text-charcoal placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                />
                {errors.area && <p className="text-red-500 text-xs mt-1">{errors.area.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Property type</label>
                <select
                  {...register("propertyType")}
                  className="w-full border border-border rounded-xl px-4 py-3 text-charcoal bg-white focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                >
                  <option value="">Select type</option>
                  <option value="1bhk">1 BHK</option>
                  <option value="2bhk">2 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="4bhk_plus">4 BHK+</option>
                  <option value="independent_floor">Independent floor</option>
                  <option value="villa">Villa / Farmhouse</option>
                </select>
                {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Approximate size <span className="font-normal text-muted">(optional)</span>
                </label>
                <input
                  {...register("sizeSqft")}
                  placeholder="e.g. 1100 sqft"
                  className="w-full border border-border rounded-xl px-4 py-3 text-charcoal placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button type="button" onClick={() => setStep(0)} className="px-6 py-3 border border-border rounded-xl text-charcoal hover:border-forest/40 transition-colors">
                Back
              </button>
              <button
                type="button"
                onClick={() => next(["city", "area", "propertyType"])}
                className="flex-1 bg-forest text-cream font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-forest-dark transition-colors"
              >
                Continue <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Choose tier */}
        {step === 2 && (
          <div>
            <h2
              className="text-2xl font-bold text-charcoal mb-2"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Choose your plan.
            </h2>
            <p className="text-muted mb-8">For {watchType === "purchase" ? "home buyers" : "renters"}.</p>

            <div className="space-y-3">
              {tiers.map((tier) => (
                <button
                  key={tier.value}
                  type="button"
                  onClick={() => setValue("tier", tier.value)}
                  className={`w-full p-5 rounded-xl border-2 text-left transition-all flex items-center justify-between ${
                    watchTier === tier.value
                      ? "border-forest bg-forest/5"
                      : "border-border hover:border-forest/40"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        watchTier === tier.value ? "border-forest bg-forest" : "border-muted/40"
                      }`}
                    >
                      {watchTier === tier.value && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-charcoal">{tier.label}</p>
                        {tier.popular && (
                          <span className="text-xs bg-terracotta text-white px-2 py-0.5 rounded-full">Popular</span>
                        )}
                      </div>
                      <p className="text-sm text-muted">{tier.desc}</p>
                    </div>
                  </div>
                  <span
                    className="text-xl font-bold text-forest flex-shrink-0"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {tier.price}
                  </span>
                </button>
              ))}
            </div>

            {errors.tier && <p className="text-red-500 text-sm mt-3">{errors.tier.message}</p>}

            <div className="flex gap-3 mt-8">
              <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-border rounded-xl text-charcoal hover:border-forest/40 transition-colors">
                Back
              </button>
              <button
                type="button"
                onClick={() => next(["tier"])}
                className="flex-1 bg-forest text-cream font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-forest-dark transition-colors"
              >
                Continue <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Schedule */}
        {step === 3 && (
          <div>
            <h2
              className="text-2xl font-bold text-charcoal mb-2"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              When works for you?
            </h2>
            <p className="text-muted mb-8">We can usually confirm within 24–48 hours.</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Preferred date</label>
                <input
                  type="date"
                  {...register("date")}
                  min={getMinDate()}
                  className="w-full border border-border rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-3">Preferred time slot</label>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setValue("timeSlot", slot)}
                      className={`p-3 rounded-xl border-2 text-sm transition-all ${
                        watch("timeSlot") === slot
                          ? "border-forest bg-forest/5 text-forest font-semibold"
                          : "border-border text-charcoal hover:border-forest/40"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
                {errors.timeSlot && <p className="text-red-500 text-xs mt-2">{errors.timeSlot.message}</p>}
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-border rounded-xl text-charcoal hover:border-forest/40 transition-colors">
                Back
              </button>
              <button
                type="button"
                onClick={() => next(["date", "timeSlot"])}
                className="flex-1 bg-forest text-cream font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-forest-dark transition-colors"
              >
                Continue <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Contact */}
        {step === 4 && (
          <div>
            <h2
              className="text-2xl font-bold text-charcoal mb-2"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Last step.
            </h2>
            <p className="text-muted mb-8">We&apos;ll WhatsApp you on this number to confirm.</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Your name</label>
                <input
                  {...register("name")}
                  placeholder="Priya Sharma"
                  className="w-full border border-border rounded-xl px-4 py-3 text-charcoal placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">WhatsApp number</label>
                <input
                  {...register("phone")}
                  placeholder="+91 98765 43210"
                  type="tel"
                  className="w-full border border-border rounded-xl px-4 py-3 text-charcoal placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">Email</label>
                <input
                  {...register("email")}
                  placeholder="priya@email.com"
                  type="email"
                  className="w-full border border-border rounded-xl px-4 py-3 text-charcoal placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-charcoal mb-2">
                  Anything specific to check? <span className="font-normal text-muted">(optional)</span>
                </label>
                <textarea
                  {...register("notes")}
                  rows={3}
                  placeholder="e.g. There's a smell in the bathroom, please check drainage. Also check the terrace access."
                  className="w-full border border-border rounded-xl px-4 py-3 text-charcoal placeholder-muted/50 focus:outline-none focus:ring-2 focus:ring-forest/30 focus:border-forest resize-none"
                />
              </div>
            </div>

            <div className="mt-6 bg-cream rounded-xl p-4 text-sm text-muted">
              Payment can be made on the day of inspection (cash or UPI) or in advance via the confirmation link we send on WhatsApp.
            </div>

            <div className="flex gap-3 mt-6">
              <button type="button" onClick={() => setStep(3)} className="px-6 py-3 border border-border rounded-xl text-charcoal hover:border-forest/40 transition-colors">
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-terracotta text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-terracotta-dark transition-colors"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
