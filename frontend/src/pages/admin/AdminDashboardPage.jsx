import { CircleDollarSign, ClipboardCheck, TrendingUp, Truck } from 'lucide-react';
import { Card, DocumentTitle, SectionHeader, StatCard } from '../../components/ui';

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Admin dashboard" />
      <SectionHeader eyebrow="Overview" title="Operations dashboard" description="Live performance panels for sales, payments and stock readiness." />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Today's sales" value="₹48,250" detail="vs. yesterday" icon={CircleDollarSign} tone="emerald" />
        <StatCard label="Monthly sales" value="₹6.1L" detail="Last 30 days" icon={TrendingUp} tone="sky" />
        <StatCard label="Pending orders" value="24" detail="Need confirmation" icon={ClipboardCheck} tone="amber" />
        <StatCard label="Today's dispatches" value="17" detail="Ready to ship" icon={Truck} tone="slate" />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <h3 className="text-lg font-bold text-slate-900">Sales summary</h3>
          <div className="mt-4 flex h-56 items-end justify-around rounded-2xl bg-gradient-to-br from-sky-50 to-slate-50 p-4">
            {[55, 68, 52, 75, 88, 72, 95].map((height, index) => (
              <div key={index} className="w-10 rounded-t-xl bg-sky-500" style={{ height: `${height}%` }} />
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-slate-900">Payment mix</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between"><span>Cash collections</span><span className="font-semibold">₹24,600</span></div>
            <div className="flex items-center justify-between"><span>UPI collections</span><span className="font-semibold">₹23,650</span></div>
            <div className="flex items-center justify-between"><span>Outstanding</span><span className="font-semibold text-rose-600">₹7,640</span></div>
          </div>
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <h3 className="text-lg font-bold text-slate-900">Recent orders</h3>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3"><span>RKJ-24101</span><span>₹335</span></div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3"><span>RKJ-24102</span><span>₹780</span></div>
            <div className="flex items-center justify-between border-b border-slate-200 pb-3"><span>RKJ-24103</span><span>₹540</span></div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-bold text-slate-900">Low-stock alerts</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-xl bg-rose-50 p-3 text-rose-700"><span>Chocolate Bar</span><span>12 left</span></div>
            <div className="flex items-center justify-between rounded-xl bg-amber-50 p-3 text-amber-700"><span>Family Pack</span><span>22 left</span></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
