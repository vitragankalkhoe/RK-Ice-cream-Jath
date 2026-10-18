import { LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, DocumentTitle } from '../../components/ui';

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12">
      <DocumentTitle title="Admin login" />
      <Card className="w-full max-w-md p-8">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">RK Agency JATH</p>
          <h1 className="mt-3 text-3xl font-black text-slate-900">Admin login</h1>
        </div>
        <form className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"><label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Staff email</label><input className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="staff@rkagency.in" /></div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"><label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Password</label><input type="password" className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="••••••••" /></div>
          <Button to="/admin/dashboard" className="w-full"><LockKeyhole className="h-4 w-4" /> Sign in</Button>
        </form>
        <p className="mt-5 text-center text-sm text-slate-600"><Link to="/" className="font-semibold text-sky-600">Back to customer website</Link></p>
      </Card>
    </div>
  );
}
