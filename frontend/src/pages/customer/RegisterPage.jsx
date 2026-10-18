import { UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, DocumentTitle } from '../../components/ui';

export default function RegisterPage() {
  return (
    <div className="py-12">
      <DocumentTitle title="Register" />
      <Card className="mx-auto max-w-2xl p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Create account</p>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Register for RK Agency JATH</h1>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Full name" />
          <input className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Phone number" />
          <input className="md:col-span-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Email address" />
          <input type="password" className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Password" />
          <input type="password" className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm" placeholder="Confirm password" />
        </div>
        <div className="mt-6 flex items-center gap-3">
          <UserRound className="h-5 w-5 text-sky-600" />
          <p className="text-sm text-slate-500">Secure registration with password validation enabled.</p>
        </div>
        <div className="mt-6"><Button className="w-full">Create account</Button></div>
        <p className="mt-5 text-center text-sm text-slate-600">Already have an account? <Link to="/login" className="font-semibold text-sky-600">Login</Link></p>
      </Card>
    </div>
  );
}
