import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button, Card, DocumentTitle } from '../../components/ui';

export default function ForgotPasswordPage() {
  return (
    <div className="py-16">
      <DocumentTitle title="Forgot password" />
      <Card className="mx-auto max-w-lg p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">Account recovery</p>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Reset password</h1>
        <p className="mt-2 text-sm text-slate-600">We will never confirm whether a specific account exists. If a reset is available, follow the instructions sent through the registered contact method.</p>
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
          <label className="mb-1 block text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Registered email or phone</label>
          <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-slate-500" /><input className="w-full bg-transparent text-sm text-slate-700 outline-none" placeholder="name@example.com" /></div>
        </div>
        <div className="mt-6"><Button className="w-full">Send reset link</Button></div>
        <p className="mt-5 text-center text-sm text-slate-600"><Link to="/login" className="font-semibold text-sky-600">Back to login</Link></p>
      </Card>
    </div>
  );
}
