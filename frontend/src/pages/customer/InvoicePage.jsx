import { Download, Printer } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Button, Card, DocumentTitle } from '../../components/ui';

export default function InvoicePage() {
  const { id } = useParams();

  return (
    <div className="py-14">
      <DocumentTitle title="Invoice" />
      <Card className="mx-auto max-w-4xl p-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">RK Agency JATH</p>
            <p className="mt-2 text-sm text-slate-600">Daflapur, Tal. Jath, Dist. Sangli, Maharashtra</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">Invoice №</p>
            <p className="text-lg font-bold text-slate-900">INV-{id}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Billed to</h3>
            <p className="mt-2 font-semibold text-slate-900">Sunil Patil</p>
            <p className="text-sm text-slate-600">Jath, Maharashtra</p>
          </div>
          <div className="text-left md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Invoice date</h3>
            <p className="mt-2 text-sm text-slate-700">18 Oct 2026</p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3">Item</th>
                <th className="px-4 py-3">Qty</th>
                <th className="px-4 py-3">Rate</th>
                <th className="px-4 py-3">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-200">
                <td className="px-4 py-3">Vanilla Scoops</td>
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">₹120</td>
                <td className="px-4 py-3">₹240</td>
              </tr>
              <tr className="border-t border-slate-200">
                <td className="px-4 py-3">Mango Kulfi</td>
                <td className="px-4 py-3">1</td>
                <td className="px-4 py-3">₹95</td>
                <td className="px-4 py-3">₹95</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 ml-auto max-w-sm space-y-3 text-sm text-slate-600">
          <div className="flex justify-between"><span>Subtotal</span><span>₹335</span></div>
          <div className="flex justify-between"><span>Discount</span><span>₹0</span></div>
          <div className="flex justify-between"><span>Grand total</span><span className="font-bold text-slate-900">₹335</span></div>
          <div className="flex justify-between"><span>Paid</span><span>₹0</span></div>
          <div className="flex justify-between"><span>Balance due</span><span className="font-bold text-rose-600">₹335</span></div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="secondary"><Printer className="h-4 w-4" /> Print</Button>
          <Button variant="ghost"><Download className="h-4 w-4" /> Download PDF</Button>
        </div>
      </Card>
    </div>
  );
}
