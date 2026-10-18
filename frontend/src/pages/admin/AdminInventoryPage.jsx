import { Card, DocumentTitle } from '../../components/ui';

export default function AdminInventoryPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Inventory" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Inventory</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Stock management</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <Card>
          <h3 className="text-lg font-bold text-slate-900">Low stock alerts</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Chocolate Bar — 12 left</li>
            <li>Family Pack — 22 left</li>
          </ul>
        </Card>
        <Card>
          <h3 className="text-lg font-bold text-slate-900">Stock movements</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>+32 units — received from supplier</li>
            <li>-18 units — sales dispatch</li>
          </ul>
        </Card>
        <Card>
          <h3 className="text-lg font-bold text-slate-900">Adjustment trail</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>12 Oct — stock check</li>
            <li>14 Oct — shelf correction</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
