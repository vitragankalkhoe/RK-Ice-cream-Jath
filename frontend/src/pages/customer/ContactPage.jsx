import { Mail, MapPin, Phone } from 'lucide-react';
import { Button, Card, DocumentTitle } from '../../components/ui';

const faqs = [
  { question: 'What is the advance-order cutoff?', answer: 'Orders must be placed at least 2 calendar days before the requested dispatch date unless the admin modifies the policy.' },
  { question: 'Do you accept bulk orders?', answer: 'Yes, RK Agency JATH supports family packs, retail orders and repeat business supplies for local customers.' },
  { question: 'Can I pay online?', answer: 'Yes, online UPI payments are accepted and verified only after authorized reconciliation.' },
];

export default function ContactPage() {
  return (
    <div className="space-y-8 pb-16">
      <DocumentTitle title="Contact" />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Card>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Business contact</p>
            <h1 className="mt-3 text-3xl font-black text-slate-900">Get in touch</h1>
            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky-600" /> +91 7769969772</p>
              <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky-600" /> +91 9096525797</p>
              <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-sky-600" /> rkagency22@gmail.com</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-sky-600" /> Daflapur, Tal. Jath, Dist. Sangli, Maharashtra, India</p>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-slate-900">Frequently asked questions</h2>
            <div className="mt-5 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-bold text-slate-900">Order assistance</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-600">
            <p>Call or message the agency before placing a custom order. Advance orders are required to prepare and reserve stock for dispatch dates.</p>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Advance-order policy</p>
              <p className="mt-2">The default cutoff is 2 calendar days before the requested dispatch date. This setting may be changed by authorized admins in the backend.</p>
            </div>
            <Button to="/products" className="w-full">Browse products</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
