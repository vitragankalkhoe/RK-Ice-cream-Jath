import { LogOut, MapPin, Pencil, ShieldCheck, UserRound } from 'lucide-react';
import { Button, Card, DocumentTitle } from '../../components/ui';

export default function ProfilePage() {
  return (
    <div className="space-y-8 pb-16">
      <DocumentTitle title="Profile" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Customer profile</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Sunil Patil</h1>
        </div>
        <Button variant="secondary"><LogOut className="h-4 w-4" /> Logout</Button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <div className="flex items-center gap-3"><UserRound className="h-5 w-5 text-sky-600" /><h2 className="text-xl font-bold text-slate-900">Profile details</h2></div>
          <div className="mt-5 space-y-4">
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Full name" defaultValue="Sunil Patil" />
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Phone" defaultValue="+91 9096525797" />
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Email" defaultValue="sunil@example.com" />
          </div>
          <div className="mt-5"><Button className="w-full">Save profile</Button></div>
        </Card>

        <Card>
          <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-sky-600" /><h2 className="text-xl font-bold text-slate-900">Saved addresses</h2></div>
          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Home</p>
              <p className="mt-2">Shivaji Road, Jath, Maharashtra</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Office</p>
              <p className="mt-2">Market Yard, Sangli</p>
            </div>
          </div>
          <div className="mt-5"><Button variant="secondary" className="w-full"><Pencil className="h-4 w-4" /> Add or edit address</Button></div>
        </Card>
      </div>

      <Card>
        <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-emerald-600" /><h2 className="text-xl font-bold text-slate-900">Security</h2></div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button variant="secondary">Change password</Button>
          <Button to="/my-orders" variant="ghost">My orders</Button>
        </div>
      </Card>
    </div>
  );
}
