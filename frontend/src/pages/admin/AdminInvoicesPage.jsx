import { Card, DocumentTitle } from '../../components/ui';

export default function AdminInvoicesPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Invoices" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Accounting</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Invoices</h1>
      </div>
      <Card><p className="text-sm text-slate-600">Invoice history is retained and searchable. PDF and print views are available for each order record.</p></Card>
    </div>
  );
}
