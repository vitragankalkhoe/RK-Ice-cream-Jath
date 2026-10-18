import { Minus, Plus, ShoppingCart, Truck } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Button, Card, DocumentTitle, ProductCard } from '../../components/ui';
import { demoProducts } from '../../data/demoProducts';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = demoProducts.find((item) => item.id === id) || demoProducts[0];
  const relatedProducts = demoProducts.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return (
    <div className="space-y-10 pb-16">
      <DocumentTitle title={product.name} />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="overflow-hidden p-0">
          <img src={product.image} alt={product.name} className="h-full min-h-[420px] w-full object-cover" />
        </Card>

        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">{product.categoryLabel}</p>
            <h1 className="mt-2 text-4xl font-black text-slate-900">{product.name}</h1>
            <p className="mt-1 text-xl text-slate-500">{product.nameMr}</p>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>SKU: {product.sku}</span>
            <span>•</span>
            <span>{product.packSize}</span>
          </div>

          <div className="flex items-end gap-3">
            <p className="text-4xl font-black text-slate-900">₹{product.price}</p>
            <p className="text-lg text-slate-400 line-through">₹{product.mrp}</p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <button type="button" className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700"><Minus className="h-4 w-4" /></button>
            <span className="min-w-6 text-center font-semibold text-slate-800">1</span>
            <button type="button" className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700"><Plus className="h-4 w-4" /></button>
            <span className="ml-auto text-sm text-slate-500">{product.stock} available</span>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="px-6 py-3"><ShoppingCart className="h-4 w-4" /> Add to cart</Button>
            <Button to="/checkout" variant="secondary" className="px-6 py-3">Buy now</Button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold text-slate-900">Description</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-sky-50 p-3 text-sm text-slate-700">
              <Truck className="h-4 w-4 text-sky-600" />
              <span>{product.storage}</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-5 text-2xl font-bold text-slate-900">Related products</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {relatedProducts.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </div>
    </div>
  );
}
