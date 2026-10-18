import { Search } from 'lucide-react';
import { Badge, Button, Card, DocumentTitle } from '../../components/ui';

const orders = [
  { orderId: 'RKJ-24101', customer: 'Sunil Patil', phone: '+91 9096525797', total: '₹335', payment: 'Pending verification', status: 'Ready', date: '18 Oct 2026' },
  { orderId: 'RKJ-24102', customer: 'Maya More', phone: '+91 7769969772', total: '₹780', payment: 'Verified', status: 'Preparing', date: '20 Oct 2026' },
];

export default function AdminOrdersPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Orders" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Fulfilment</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Order management</h1>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2">
          <Search className="h-4 w-4 text-slate-500" />
          <input className="w-64 border-0 bg-transparent text-sm text-slate-700 outline-none" placeholder="Search by order or customer" />
        </div>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3">Order</th>
                <th className="px-4 py-3">Customer</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Payment</th>
                <th className="px-4 py-3">Dispatch</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderId} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-semibold text-slate-900">{order.orderId}</td>
                  <td className="px-4 py-3">{order.customer}<br />{order.phone}</td>
                  <td className="px-4 py-3">{order.total}</td>
                  <td className="px-4 py-3">{order.payment}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3"><Badge tone="success">{order.status}</Badge></td>
                  <td className="px-4 py-3"><div className="flex flex-wrap gap-2"><Button to="/admin/orders" variant="secondary">View</Button><Button variant="ghost">Confirm</Button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
