import { Card, DocumentTitle } from '../../components/ui';

export default function AdminSuppliersPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Suppliers" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Procurement</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Suppliers</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card><h3 className="text-lg font-bold text-slate-900">Supplier ledger</h3><p className="mt-3 text-sm text-slate-600">Jath Dairy Supplies — ₹14,500 due</p></Card>
        <Card><h3 className="text-lg font-bold text-slate-900">Purchase records</h3><p className="mt-3 text-sm text-slate-600">Last purchase: 32 cases of vanilla and 18 cases of family tubs.</p></Card>
      </div>
    </div>
  );
}
