import { Search } from 'lucide-react';
import { Badge, Button, Card, DocumentTitle } from '../../components/ui';

const orders = [
  { id: 'RKJ-24101', itemCount: 2, amount: 335, paymentStatus: 'Pending verification', status: 'Confirmed', date: '2026-10-10', dispatchDate: '2026-10-18' },
  { id: 'RKJ-24102', itemCount: 5, amount: 780, paymentStatus: 'Verified', status: 'Preparing', date: '2026-10-12', dispatchDate: '2026-10-20' },
];

const statusToneMap = {
  New: 'info',
  Confirmed: 'warning',
  Preparing: 'warning',
  Ready: 'success',
  Dispatched: 'info',
  Delivered: 'success',
  Cancelled: 'danger',
};

export default function MyOrdersPage() {
  return (
    <div className="space-y-8 pb-16">
      <DocumentTitle title="My orders" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Order history</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">My orders</h1>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <Search className="h-4 w-4 text-slate-500" />
          <input className="w-52 border-0 bg-transparent text-sm text-slate-700 outline-none" placeholder="Search order or phone" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {['All', 'New', 'Confirmed', 'Preparing', 'Ready', 'Dispatched', 'Delivered', 'Cancelled'].map((status) => (
          <button type="button" key={status} className={`rounded-full px-3 py-2 text-sm font-medium ${status === 'All' ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700'}`}>{status}</button>
        ))}
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-slate-900">{order.id}</h2>
                <Badge tone={statusToneMap[order.status]}>{order.status}</Badge>
              </div>
              <p className="mt-2 text-sm text-slate-500">Placed {order.date} • {order.itemCount} items</p>
              <p className="text-sm text-slate-500">Dispatch: {order.dispatchDate} • Payment: {order.paymentStatus}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-xl font-bold text-slate-900">₹{order.amount}</p>
              <Button to={`/my-orders/${order.id}`} variant="secondary">View details</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
