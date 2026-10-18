import { LockKeyhole, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, DocumentTitle } from '../../components/ui';

export default function LoginPage() {
  return (
    <div className="grid min-h-[72vh] items-center gap-6 pb-16 lg:grid-cols-2">
      <DocumentTitle title="Login" />
      <div className="hidden h-full overflow-hidden rounded-[32px] bg-slate-900 lg:block">
        <img src="https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80" alt="Ice cream" className="h-full w-full object-cover opacity-80" />
      </div>

      <Card className="mx-auto w-full max-w-md p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Welcome back</p>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Customer login</h1>
        <p className="mt-2 text-sm text-slate-500">Sign in to track your orders and manage payments.</p>

        <form className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Phone or email</label>
            <div className="flex items-center gap-2"><Smartphone className="h-4 w-4 text-slate-500" /><input className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="+91 90000 00000" /></div>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Password</label>
            <div className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-slate-500" /><input type="password" className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="••••••••" /></div>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-500">
            <label className="flex items-center gap-2"><input type="checkbox" /> Remember me</label>
            <Link to="/forgot-password" className="font-medium text-sky-600">Forgot password?</Link>
          </div>
          <Button className="w-full">Login</Button>
        </form>

        <p className="mt-5 text-center text-sm text-slate-600">New customer? <Link to="/register" className="font-semibold text-sky-600">Create account</Link></p>
      </Card>
    </div>
  );
}
