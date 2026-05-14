import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

async function getData() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) return null;

  const [bookingsRes, subscribersRes] = await Promise.allSettled([
    supabase.from("bookings").select("*").order("created_at", { ascending: false }),
    supabase.from("subscribers").select("*").order("created_at", { ascending: false }),
  ]);

  const bookings = bookingsRes.status === "fulfilled" ? (bookingsRes.value.data ?? []) : [];
  const subscribers = subscribersRes.status === "fulfilled" ? (subscribersRes.value.data ?? []) : [];

  return { bookings, subscribers };
}

interface SearchParams {
  key?: string;
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { key } = await searchParams;
  const adminKey = process.env.ADMIN_KEY;

  if (!adminKey || key !== adminKey) {
    redirect("/");
  }

  const data = await getData();

  return (
    <div className="min-h-screen bg-cream pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1
            className="text-4xl font-bold text-charcoal mb-2"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Admin
          </h1>
          <p className="text-muted text-sm">Backtraq internal dashboard</p>
        </div>

        {!data && (
          <div className="bg-white border border-border rounded-2xl p-8 text-center text-muted">
            Supabase not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.
          </div>
        )}

        {data && (
          <div className="space-y-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Total bookings", value: data.bookings.length },
                { label: "Subscribers", value: data.subscribers.length },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-border rounded-2xl p-6">
                  <p
                    className="text-4xl font-bold text-charcoal mb-1"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Bookings table */}
            <div>
              <h2
                className="text-2xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Bookings ({data.bookings.length})
              </h2>
              <div className="bg-white border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-cream">
                        {["Date", "Name", "Phone", "Email", "Type", "Plan", "City", "Area", "Property", "Size", "Insp. Date", "Time", "Payment", "Notes"].map((h) => (
                          <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider whitespace-nowrap">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {data.bookings.length === 0 && (
                        <tr>
                          <td colSpan={14} className="px-4 py-8 text-center text-muted">No bookings yet.</td>
                        </tr>
                      )}
                      {data.bookings.map((row) => (
                        <tr key={row.id} className="hover:bg-cream/50 transition-colors">
                          {[
                            new Date(row.created_at).toLocaleDateString("en-IN"),
                            row.name,
                            row.phone,
                            row.email,
                            row.type,
                            row.tier,
                            row.city,
                            row.area,
                            row.property_type,
                            row.size_sqft || "—",
                            row.inspection_date,
                            row.time_slot,
                            row.payment_id || "Pay on day",
                            row.notes || "—",
                          ].map((cell, j) => (
                            <td key={j} className="px-4 py-3 text-charcoal whitespace-nowrap max-w-[200px] truncate">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Subscribers table */}
            <div>
              <h2
                className="text-2xl font-bold text-charcoal mb-4"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                Subscribers ({data.subscribers.length})
              </h2>
              <div className="bg-white border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-cream">
                        {["Subscribed at", "Email"].map((h) => (
                          <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {data.subscribers.length === 0 && (
                        <tr>
                          <td colSpan={2} className="px-4 py-8 text-center text-muted">No subscribers yet.</td>
                        </tr>
                      )}
                      {data.subscribers.map((row) => (
                        <tr key={row.id} className="hover:bg-cream/50 transition-colors">
                          <td className="px-4 py-3 text-charcoal">{new Date(row.created_at).toLocaleDateString("en-IN")}</td>
                          <td className="px-4 py-3 text-charcoal">{row.email}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
