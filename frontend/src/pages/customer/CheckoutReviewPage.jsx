import { CheckCircle2 } from 'lucide-react';
import { Button, Card, DocumentTitle, ProgressSteps } from '../../components/ui';

export default function CheckoutReviewPage() {
  return (
    <div className="space-y-8 pb-16">
      <DocumentTitle title="Review order" />
      <ProgressSteps steps={['Cart', 'Address', 'Review', 'Confirmation']} current={2} />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-bold text-slate-900">Customer & address</h2>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-800">Name:</span> Sunil Patil</p>
              <p><span className="font-semibold text-slate-800">Phone:</span> +91 9096525797</p>
              <p><span className="font-semibold text-slate-800">Address:</span> 14, Shivaji Road, Jath</p>
            </div>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-slate-900">Order summary</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="flex justify-between"><span>Vanilla Scoops ×2</span><span>₹240</span></div>
              <div className="flex justify-between"><span>Mango Kulfi ×1</span><span>₹95</span></div>
              <div className="flex justify-between"><span>Requested dispatch date</span><span>18 Oct 2026</span></div>
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-bold text-slate-900">Payment</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between"><span>Payment method</span><span>Cash</span></div>
            <div className="flex justify-between"><span>Outstanding due</span><span>₹335</span></div>
          </div>
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-700">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /><span>Terms confirm that orders are accepted subject to dispatch availability.</span></div>
          </div>
          <div className="mt-6"><Button to="/order-confirmation/ord-101" className="w-full">Place order</Button></div>
        </Card>
      </div>
    </div>
  );
}
