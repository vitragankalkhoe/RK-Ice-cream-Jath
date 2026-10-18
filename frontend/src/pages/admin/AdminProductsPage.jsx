import { Search } from 'lucide-react';
import { Badge, Button, Card, DocumentTitle } from '../../components/ui';

const products = [
  { name: 'Vanilla Scoops', sku: 'RK-VC-101', stock: 48, status: 'Active' },
  { name: 'Chocolate Bar', sku: 'RK-CB-314', stock: 12, status: 'Low stock' },
];

export default function AdminProductsPage() {
  return (
    <div className="space-y-8">
      <DocumentTitle title="Products" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-600">Catalog</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Products</h1>
        </div>
        <Button>Add product</Button>
      </div>

      <Card className="overflow-hidden">
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
          <Search className="h-4 w-4 text-slate-500" />
          <input className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none" placeholder="Search product or SKU" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">SKU</th>
                <th className="px-4 py-3">Stock</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.sku} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-semibold text-slate-900">{product.name}</td>
                  <td className="px-4 py-3">{product.sku}</td>
                  <td className="px-4 py-3">{product.stock}</td>
                  <td className="px-4 py-3"><Badge tone={product.stock < 15 ? 'danger' : 'success'}>{product.status}</Badge></td>
                  <td className="px-4 py-3"><div className="flex gap-2"><Button variant="ghost">Edit</Button><Button variant="secondary">View</Button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
