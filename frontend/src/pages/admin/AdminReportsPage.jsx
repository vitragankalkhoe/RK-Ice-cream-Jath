import { Card, DocumentTitle } from '../../components/ui';

export default function AdminReportsPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Reports" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Insights</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Reports</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card><h3 className="text-lg font-bold text-slate-900">Daily sales</h3><p className="mt-3 text-sm text-slate-600">₹48,250</p></Card>
        <Card><h3 className="text-lg font-bold text-slate-900">Best sellers</h3><p className="mt-3 text-sm text-slate-600">Vanilla Scoops, Kulfi, Family Pack</p></Card>
        <Card><h3 className="text-lg font-bold text-slate-900">Low stock</h3><p className="mt-3 text-sm text-slate-600">4 products</p></Card>
      </div>
    </div>
  );
}
