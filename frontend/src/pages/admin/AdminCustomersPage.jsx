import { Search } from 'lucide-react';
import { Card, DocumentTitle } from '../../components/ui';

const customers = [
  { name: 'Sunil Patil', phone: '+91 9096525797', orders: 8, sales: '₹12,600', balance: '₹1,200' },
  { name: 'Maya More', phone: '+91 7769969772', orders: 5, sales: '₹8,450', balance: '₹0' },
];

export default function AdminCustomersPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Customers" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">CRM</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Customers</h1>
      </div>
      <Card className="overflow-hidden">
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3"><Search className="h-4 w-4 text-slate-500" /><input className="w-full border-0 bg-transparent text-sm outline-none" placeholder="Search customer or phone" /></div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-slate-700">
              <tr><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Orders</th><th className="px-4 py-3">Sales</th><th className="px-4 py-3">Outstanding</th></tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.phone} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-semibold text-slate-900">{customer.name}<br />{customer.phone}</td>
                  <td className="px-4 py-3">{customer.orders}</td>
                  <td className="px-4 py-3">{customer.sales}</td>
                  <td className="px-4 py-3">{customer.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
