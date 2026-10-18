import { Card, DocumentTitle, SectionHeader } from '../../components/ui';

const steps = [
  { title: 'Discover', text: 'Browse our product catalogue and choose the items you need.' },
  { title: 'Prepare', text: 'Add items to cart and set your required dispatch date.' },
  { title: 'Checkout', text: 'Review customer details, payment method and contact notes.' },
  { title: 'Track', text: 'Monitor preparation, dispatch and delivery status from your profile.' },
];

export default function HowToOrderPage() {
  return (
    <div className="space-y-8 pb-16">
      <DocumentTitle title="How to order" />
      <SectionHeader eyebrow="How it works" title="Simple order workflow" description="Our process is designed for convenience, advance planning and reliable dispatch." />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <Card key={step.title}>
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">{index + 1}</div>
            <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
