import { Card, DocumentTitle } from '../../components/ui';

export default function AdminDispatchPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Dispatch" />
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Logistics</p>
        <h1 className="mt-2 text-3xl font-black text-slate-900">Dispatch planning</h1>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <h3 className="text-lg font-bold text-slate-900">Packed queue</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between"><span>RKJ-24101</span><span>Ready</span></div>
            <div className="flex justify-between"><span>RKJ-24102</span><span>Preparing</span></div>
          </div>
        </Card>
        <Card>
          <h3 className="text-lg font-bold text-slate-900">Dispatch calendar</h3>
          <div className="mt-4 flex h-44 items-end justify-around rounded-2xl bg-sky-50 p-4">
            {[40, 70, 50, 85, 60, 75].map((height, index) => <div key={index} className="w-10 rounded-t-xl bg-sky-500" style={{ height: `${height}%` }} />)}
          </div>
        </Card>
      </div>
    </div>
  );
}
