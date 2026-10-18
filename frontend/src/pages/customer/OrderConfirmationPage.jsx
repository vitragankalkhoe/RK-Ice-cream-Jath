import { CheckCircle2, PackageCheck, ReceiptText } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Button, Card, DocumentTitle } from '../../components/ui';

export default function OrderConfirmationPage() {
  const { id } = useParams();

  return (
    <div className="py-12">
      <DocumentTitle title="Order confirmation" />
      <Card className="mx-auto max-w-2xl p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"><CheckCircle2 className="h-8 w-8" /></div>
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">Order placed</p>
        <h1 className="mt-3 text-3xl font-black text-slate-900">Thank you for your order</h1>
        <p className="mt-2 text-sm text-slate-600">Your order number is <span className="font-semibold text-slate-900">RKJ-{id}</span>. Payment remains pending verification until confirmed by authorized staff.</p>

        <div className="mt-6 grid gap-4 text-left md:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs uppercase tracking-[0.2em] text-slate-500">Order total</p><p className="mt-2 text-xl font-bold text-slate-900">₹335</p></div>
          <div className="rounded-xl bg-slate-50 p-4"><p className="text-xs uppercase tracking-[0.2em] text-slate-500">Dispatch date</p><p className="mt-2 text-xl font-bold text-slate-900">18 Oct 2026</p></div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/my-orders" className="px-6"><PackageCheck className="h-4 w-4" /> View order</Button>
          <Button to="/products" variant="secondary" className="px-6"><ReceiptText className="h-4 w-4" /> Continue shopping</Button>
        </div>
      </Card>
    </div>
  );
}
