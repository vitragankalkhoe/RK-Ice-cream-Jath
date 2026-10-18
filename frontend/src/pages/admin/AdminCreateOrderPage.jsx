import { Card, DocumentTitle } from '../../components/ui';

export default function AdminCreateOrderPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Create order" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Operations</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Create order</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <h2 className="text-xl font-bold text-slate-900">Customer & products</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Customer name" />
            <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Phone" />
            <input className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Search product" />
            <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Qty" />
            <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Discount" />
          </div>
        </Card>

        <Card>
          <h2 className="text-xl font-bold text-slate-900">Summary</h2>
          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between"><span>Subtotal</span><span>₹335</span></div>
            <div className="flex justify-between"><span>Dispatch date</span><span>18 Oct</span></div>
            <div className="flex justify-between"><span>Payment</span><span>Cash</span></div>
          </div>
          <button type="button" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white">Create order</button>
        </Card>
      </div>
    </div>
  );
}
