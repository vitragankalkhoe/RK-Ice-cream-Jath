import { CalendarDays, MapPinned, Phone } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Badge, Button, Card, DocumentTitle } from '../../components/ui';

export default function OrderDetailsPage() {
  const { id } = useParams();
  const timeline = ['Placed', 'Confirmed', 'Preparing', 'Ready', 'Dispatched', 'Delivered'];

  return (
    <div className="space-y-8 pb-16">
      <DocumentTitle title={`Order ${id}`} />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Order details</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">{id}</h1>
        </div>
        <Badge tone="success">Confirmed</Badge>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-bold text-slate-900">Recent order activity</h2>
            <div className="mt-5 space-y-3">
              {timeline.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${index <= 2 ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>{index + 1}</div>
                  <div className="flex-1 border-b border-dashed border-slate-200 pb-2 text-sm text-slate-600">{step}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-slate-900">Items</h2>
            <div className="mt-4 space-y-4 text-sm text-slate-600">
              <div className="flex justify-between"><span>Vanilla Scoops ×2</span><span>₹240</span></div>
              <div className="flex justify-between"><span>Mango Kulfi ×1</span><span>₹95</span></div>
              <div className="border-t border-slate-200 pt-3 flex justify-between font-semibold text-slate-900"><span>Total</span><span>₹335</span></div>
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-bold text-slate-900">Order info</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-sky-600" /><span>Requested dispatch: 18 Oct 2026</span></div>
              <div className="flex items-center gap-2"><MapPinned className="h-4 w-4 text-sky-600" /><span>Jath, Maharashtra</span></div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-600" /><span>+91 9096525797</span></div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-slate-900">Actions</h2>
            <div className="mt-4 space-y-3">
              <Button to={`/my-orders/${id}/invoice`} variant="secondary" className="w-full">Download invoice</Button>
              <Button to={`/payment/${id}`} className="w-full">Pay outstanding amount</Button>
              <Button to="/contact" variant="ghost" className="w-full">Contact support</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
