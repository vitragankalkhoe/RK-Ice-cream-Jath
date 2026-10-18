import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button, Card, DocumentTitle, SectionHeader } from '../../components/ui';

const cartItems = [
  { id: 1, name: 'Vanilla Scoops', nameMr: 'व्हॅनिला स्कूप्स', price: 120, quantity: 2, sku: 'RK-VC-101' },
  { id: 2, name: 'Mango Kulfi', nameMr: 'मॅंगो कुल्फी', price: 95, quantity: 1, sku: 'RK-MK-205' },
];

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="space-y-8 pb-16">
      <DocumentTitle title="Cart" />
      <SectionHeader eyebrow="Basket" title="Your shopping cart" description="Review quantities, pricing and delivery notes before checkout." />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.nameMr}</p>
                <p className="mt-1 text-xs text-slate-500">SKU: {item.sku}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1">
                  <button type="button" className="rounded-lg p-2 text-slate-600 hover:bg-white"><Minus className="h-4 w-4" /></button>
                  <span className="w-6 text-center text-sm font-semibold">{item.quantity}</span>
                  <button type="button" className="rounded-lg p-2 text-slate-600 hover:bg-white"><Plus className="h-4 w-4" /></button>
                </div>
                <div className="min-w-[90px] text-right">
                  <p className="font-bold text-slate-900">₹{item.price * item.quantity}</p>
                  <p className="text-xs text-slate-400">₹{item.price}/unit</p>
                </div>
                <button type="button" className="rounded-lg border border-rose-200 bg-rose-50 p-2 text-rose-600"><Trash2 className="h-4 w-4" /></button>
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <h3 className="text-xl font-bold text-slate-900">Order summary</h3>
          <div className="mt-5 space-y-3 text-sm text-slate-600">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>₹0</span></div>
            <div className="flex justify-between"><span>Packaging</span><span>₹25</span></div>
            <div className="border-t border-slate-200 pt-3 text-base font-semibold text-slate-900 flex justify-between"><span>Total</span><span>₹{subtotal + 25}</span></div>
          </div>
          <div className="mt-6 space-y-3">
            <Button to="/checkout" className="w-full">Proceed to checkout</Button>
            <Button to="/products" variant="secondary" className="w-full">Continue shopping</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
