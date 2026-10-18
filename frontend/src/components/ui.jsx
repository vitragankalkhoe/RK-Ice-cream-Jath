import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, CheckCircle2, ShoppingCart } from 'lucide-react';

export function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = `${title} | RK Agency JATH`;
  }, [title]);

  return null;
}

export function Button({ children, className = '', variant = 'primary', to, ...props }) {
  const classes = [
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold transition',
    variant === 'primary' ? 'bg-sky-600 text-white shadow-sm hover:bg-sky-500' : '',
    variant === 'secondary' ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' : '',
    variant === 'ghost' ? 'text-slate-600 hover:bg-slate-100' : '',
    variant === 'danger' ? 'bg-rose-500 text-white hover:bg-rose-400' : '',
    variant === 'success' ? 'bg-emerald-600 text-white hover:bg-emerald-500' : '',
    className,
  ].join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export function Badge({ children, tone = 'neutral', className = '' }) {
  const toneMap = {
    neutral: 'bg-slate-100 text-slate-700',
    success: 'bg-emerald-100 text-emerald-700',
    warning: 'bg-amber-100 text-amber-700',
    danger: 'bg-rose-100 text-rose-600',
    info: 'bg-sky-100 text-sky-700',
  };

  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${toneMap[tone]} ${className}`}>{children}</span>;
}

export function Card({ children, className = '' }) {
  return <div className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm ${className}`}>{children}</div>;
}

export function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">{eyebrow}</p>}
        <h2 className="mt-2 text-2xl font-bold text-slate-900">{title}</h2>
        {description && <p className="mt-2 max-w-2xl text-sm text-slate-600">{description}</p>}
      </div>
      {action}
    </div>
  );
}

export function StatCard({ label, value, detail, icon: Icon, tone = 'sky' }) {
  const toneMap = {
    sky: 'bg-sky-50 text-sky-700',
    emerald: 'bg-emerald-50 text-emerald-700',
    amber: 'bg-amber-50 text-amber-700',
    rose: 'bg-rose-50 text-rose-700',
    slate: 'bg-slate-100 text-slate-700',
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-bold text-slate-900">{value}</p>
          {detail && <p className="mt-2 text-sm text-slate-600">{detail}</p>}
        </div>
        <div className={`rounded-xl p-3 ${toneMap[tone]}`}>
          {Icon && <Icon className="h-5 w-5" />}
        </div>
      </div>
    </div>
  );
}

export function ProductCard({ product }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <img src={product.image} alt={product.name} className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" />
        <div className="absolute left-3 top-3">
          <Badge tone={product.stock > 0 ? 'success' : 'danger'}>{product.stock > 0 ? 'In stock' : 'Out of stock'}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">{product.categoryLabel}</p>
          <h3 className="mt-2 text-xl font-bold text-slate-900">{product.name}</h3>
          <p className="text-sm text-slate-500">{product.nameMr}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>SKU: {product.sku}</span>
          <span>{product.packSize}</span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-slate-900">₹{product.price}</p>
            <p className="text-xs line-through text-slate-400">₹{product.mrp}</p>
          </div>
          <span className="text-sm text-slate-500">{product.stock} left</span>
        </div>

        <div className="mt-auto flex gap-3">
          <Button variant="ghost" to={`/products/${product.id}`} className="flex-1">Details</Button>
          <Button className="flex-1" to="/cart">
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ProgressSteps({ steps, current }) {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {steps.map((step, index) => {
        const active = current === index;
        const done = index < current;
        return (
          <div key={step} className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium ${active ? 'bg-sky-600 text-white' : done ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
            {done ? <CheckCircle2 className="h-4 w-4" /> : index + 1}
            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
}

export function EmptyState({ title, description, action }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
      <AlertTriangle className="mx-auto h-8 w-8 text-amber-500" />
      <h3 className="mt-4 text-lg font-semibold text-slate-800">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function CTAButton({ label, to, icon = ArrowRight }) {
  const Icon = icon;
  return (
    <Button to={to} className="px-6 py-3">
      {label}
      <Icon className="h-4 w-4" />
    </Button>
  );
}
