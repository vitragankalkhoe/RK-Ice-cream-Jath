import { Card, DocumentTitle } from '../../components/ui';

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Settings" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Control</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Settings</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card><h3 className="text-lg font-bold text-slate-900">Business details</h3><p className="mt-3 text-sm text-slate-600">Name, address, phone, email and dispatch policies.</p></Card>
        <Card><h3 className="text-lg font-bold text-slate-900">UPI configuration</h3><p className="mt-3 text-sm text-slate-600">Configured agency UPI ID and payment verification settings.</p></Card>
        <Card><h3 className="text-lg font-bold text-slate-900">Stock thresholds</h3><p className="mt-3 text-sm text-slate-600">Low-stock warnings and expiry alerts.</p></Card>
        <Card><h3 className="text-lg font-bold text-slate-900">User roles</h3><p className="mt-3 text-sm text-slate-600">Admin, staff and customer permissions.</p></Card>
      </div>
    </div>
  );
}
