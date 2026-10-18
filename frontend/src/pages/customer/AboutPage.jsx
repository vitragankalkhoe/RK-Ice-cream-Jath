import { BadgeCheck, CakeSlice, Snowflake, Warehouse } from 'lucide-react';
import { Card, DocumentTitle, SectionHeader } from '../../components/ui';

export default function AboutPage() {
  return (
    <div className="space-y-8 pb-16">
      <DocumentTitle title="About us" />
      <SectionHeader
        eyebrow="About RK Agency JATH"
        title="Serving quality frozen products with local trust"
        description="We are a local distribution business focused on quality, service and timely dispatch across the Jath and Sangli region."
      />
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          { icon: CakeSlice, title: 'Premium selection', text: 'Curated ice creams, cones, kulfi and family packs for homes and small businesses.' },
          { icon: Snowflake, title: 'Cold-chain care', text: 'Temperature-safe storage and dispatch planning keep product quality high.' },
          { icon: Warehouse, title: 'Local distribution', text: 'Efficient supply for customers looking for reliable service in and around Jath.' },
          { icon: BadgeCheck, title: 'Trusted support', text: 'Responsive customer assistance, order tracking and clear payment communication.' },
        ].map(({ icon: Icon, title, text }) => (
          <Card key={title}>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600"><Icon className="h-5 w-5" /></div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{text}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
