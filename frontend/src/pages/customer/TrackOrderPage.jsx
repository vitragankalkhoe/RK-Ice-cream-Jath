import { Search } from 'lucide-react';
import { Button, Card, DocumentTitle } from '../../components/ui';

export default function TrackOrderPage() {
  return (
    <div className="py-12">
      <DocumentTitle title="Track order" />
      <Card className="mx-auto max-w-2xl p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Order tracking</p>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Track your order</h1>
        <div className="mt-6 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <Search className="h-4 w-4 text-slate-500" />
          <input className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="Enter order number or phone number" />
        </div>
        <div className="mt-6"><Button className="w-full">Search</Button></div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Latest status</p>
          <p className="mt-2">RKJ-24101 • Confirmed • Ready for dispatch</p>
        </div>
      </Card>
    </div>
  );
}
