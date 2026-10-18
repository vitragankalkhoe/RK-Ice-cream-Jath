import { CreditCard, QrCode, RefreshCcw } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Button, Card, DocumentTitle } from '../../components/ui';

export default function PaymentPage() {
  const { orderId } = useParams();

  return (
    <div className="py-12">
      <DocumentTitle title="Payment" />
      <Card className="mx-auto max-w-4xl p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Payment status</p>
            <h1 className="mt-2 text-3xl font-black text-slate-900">Order {orderId}</h1>
          </div>
          <div className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">Pending verification</div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-xl font-bold text-slate-900">Payment summary</h2>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between"><span>Total</span><span>₹335</span></div>
              <div className="flex justify-between"><span>Paid</span><span>₹0</span></div>
              <div className="flex justify-between"><span>Outstanding</span><span>₹335</span></div>
            </div>
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-center">
              <QrCode className="mx-auto h-14 w-14 text-sky-600" />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Agency UPI QR</p>
              <p className="mt-2 text-sm text-slate-600">UPI ID: rkagency22@upi</p>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-slate-200 p-4">
              <h2 className="text-xl font-bold text-slate-900">Select payment method</h2>
              <div className="mt-4 flex gap-3">
                <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2"><input type="radio" name="payment" /> Cash</label>
                <label className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2"><input type="radio" name="payment" defaultChecked /> UPI</label>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 p-4">
              <h2 className="text-xl font-bold text-slate-900">Transaction details</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Reference number" />
                <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Provider name" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="px-6"><CreditCard className="h-4 w-4" /> Submit payment</Button>
              <Button variant="secondary" className="px-6"><RefreshCcw className="h-4 w-4" /> Refresh status</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
