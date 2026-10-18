import { Card, DocumentTitle } from '../../components/ui';

export default function AdminPaymentsPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Payments" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Finance</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Payments & QR</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card><h3 className="text-lg font-bold text-slate-900">Cash ledger</h3><p className="mt-3 text-sm text-slate-600">Cash collected: ₹24,600</p></Card>
        <Card><h3 className="text-lg font-bold text-slate-900">UPI verification</h3><p className="mt-3 text-sm text-slate-600">Pending verification: 3 transactions</p></Card>
      </div>
    </div>
  );
}
