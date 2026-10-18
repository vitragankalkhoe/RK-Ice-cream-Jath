import { ArrowRight, BadgeCheck, MapPin, Phone, ShieldCheck, ShoppingBasket, Sparkles, Truck } from 'lucide-react';
import { Button, Card, DocumentTitle, ProductCard, SectionHeader } from '../../components/ui';
import { demoProducts } from '../../data/demoProducts';

const categories = [
  { name: 'Cones', nameMr: 'कोन', icon: Sparkles },
  { name: 'Cups', nameMr: 'कप', icon: ShoppingBasket },
  { name: 'Kulfi', nameMr: 'कुल्फी', icon: BadgeCheck },
  { name: 'Bars', nameMr: 'बार', icon: Sparkles },
  { name: 'Family Packs', nameMr: 'फॅमिली पॅक', icon: ShoppingBasket },
  { name: 'Frozen Goods', nameMr: 'फ्रोजन गोड्स', icon: Truck },
];

export default function HomePage() {
  const featured = demoProducts.filter((product) => product.featured).slice(0, 4);

  return (
    <div className="space-y-12 pb-16">
      <DocumentTitle title="Home" />
      <section className="relative overflow-hidden rounded-[32px] bg-slate-950 px-6 py-10 text-white shadow-xl sm:px-8 lg:px-12 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.3),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.2),transparent_20%)]" />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Quality Products | Trusted Service</p>
            <h1 className="max-w-xl text-4xl font-black tracking-tight sm:text-5xl">Frozen treats for every family moment.</h1>
            <p className="mt-5 max-w-xl text-base text-slate-200">RK Agency JATH supplies premium ice creams and frozen products across Sangli with safe cold-chain delivery and dependable advance ordering.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/products" className="bg-sky-500 px-6 py-3 text-white hover:bg-sky-400">Shop Now <ArrowRight className="h-4 w-4" /></Button>
              <Button to="/products" variant="secondary" className="bg-white/10 px-6 py-3 text-white hover:bg-white/20">Browse Products</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-sky-300" /> +91 7769969772</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-sky-300" /> Daflapur, Jath</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-sky-400/40 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1570197788417-0e823ef4b8d8?auto=format&fit=crop&w=900&q=80"
              alt="Ice cream assortment"
              className="h-[420px] w-full rounded-[30px] object-cover shadow-2xl ring-2 ring-sky-400/40"
            />
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Categories"
          title="Popular product ranges"
          description="Freshly stocked favourites packed for homes, shops, and festive servings."
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
          {categories.map(({ name, nameMr, icon: Icon }) => (
            <Card key={name} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{name}</h3>
              <p className="text-sm text-slate-500">{nameMr}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Best sellers"
          title="Popular and featured items"
          description="Preferred selections from our loyal customers and wholesale buyers."
          action={<Button to="/products" variant="ghost">View all products</Button>}
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-sky-50/70">
          <SectionHeader eyebrow="Ordering" title="Advance ordering made simple" description="Place your request before the dispatch cutoff to ensure smooth preparation and delivery." />
          <ol className="space-y-3 text-sm text-slate-600">
            <li>1. Browse the catalogue and add products to your cart.</li>
            <li>2. Choose a dispatch date at least 2 calendar days ahead.</li>
            <li>3. Confirm address, payment method, and notes before checkout.</li>
            <li>4. Track the order status from your profile and dashboard.</li>
          </ol>
          <div className="mt-5"><Button to="/checkout">Book your order</Button></div>
        </Card>

        <Card>
          <SectionHeader eyebrow="Why choose us" title="Built for quality and reliability" />
          <div className="space-y-4">
            <div className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 text-emerald-600" /><div><h3 className="font-semibold text-slate-900">Cold-chain handling</h3><p className="text-sm text-slate-600">Every dispatch is prepared with strict temperature safety and secure packing.</p></div></div>
            <div className="flex gap-3"><Truck className="mt-1 h-5 w-5 text-sky-600" /><div><h3 className="font-semibold text-slate-900">Reliable dispatch</h3><p className="text-sm text-slate-600">We coordinate local delivery windows for reliable service and transparent updates.</p></div></div>
            <div className="flex gap-3"><BadgeCheck className="mt-1 h-5 w-5 text-emerald-600" /><div><h3 className="font-semibold text-slate-900">Multiple payment methods</h3><p className="text-sm text-slate-600">Pay by cash or online UPI, with clear verification and status tracking.</p></div></div>
          </div>
        </Card>
      </section>

      <section className="rounded-[30px] bg-slate-900 px-6 py-8 text-white sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Contact us</p>
            <h2 className="mt-2 text-3xl font-bold">Need a bulk order or help with dispatch?</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact" variant="secondary" className="bg-white/10 text-white hover:bg-white/20">Contact Sales</Button>
            <Button to="/products" className="bg-sky-500 text-white hover:bg-sky-400">Browse Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
