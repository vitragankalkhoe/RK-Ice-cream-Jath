import { Card, DocumentTitle, ProgressSteps } from '../../components/ui';

export default function CheckoutPage() {
  return (
    <div className="space-y-8 pb-16">
      <DocumentTitle title="Checkout" />
      <ProgressSteps steps={['Cart', 'Address', 'Review', 'Confirmation']} current={1} />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-bold text-slate-900">Customer details</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Full name" />
              <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Phone number" />
              <input className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Delivery address" />
              <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="City" />
              <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Pin code" />
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-slate-900">Order details</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <input type="date" className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" />
              <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm"><option>Cash on delivery</option><option>UPI payment</option></select>
              <textarea className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" rows="4" placeholder="Customer note or delivery instructions" />
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-bold text-slate-900">Price summary</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between"><span>Vanilla Scoops ×2</span><span>₹240</span></div>
            <div className="flex justify-between"><span>Mango Kulfi ×1</span><span>₹95</span></div>
            <div className="flex justify-between"><span>Subtotal</span><span>₹335</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>₹0</span></div>
            <div className="flex justify-between"><span>Advance order cutoff</span><span>2 days</span></div>
            <div className="border-t border-slate-200 pt-3 text-base font-semibold text-slate-900 flex justify-between"><span>Estimated total</span><span>₹335</span></div>
          </div>
          <div className="mt-6 text-sm text-slate-500">Earliest valid dispatch date: <span className="font-semibold text-slate-800">Today + 2 calendar days</span></div>
          <button type="button" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white hover:bg-sky-500">Submit order</button>
        </Card>
      </div>
    </div>
  );
}
