import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Button, Card, DocumentTitle, ProductCard, SectionHeader } from '../../components/ui';
import { categories, demoProducts } from '../../data/demoProducts';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    let items = demoProducts.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const searchableText = `${product.name} ${product.nameMr} ${product.sku}`.toLowerCase();
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });

    if (sortBy === 'price-low') {
      items = [...items].sort((a, b) => a.price - b.price);
    }
    if (sortBy === 'price-high') {
      items = [...items].sort((a, b) => b.price - a.price);
    }
    if (sortBy === 'popular') {
      items = [...items].sort((a, b) => b.rating - a.rating);
    }
    if (sortBy === 'stock') {
      items = [...items].sort((a, b) => b.stock - a.stock);
    }
    return items;
  }, [query, selectedCategory, sortBy]);

  return (
    <div className="space-y-8 pb-16">
      <DocumentTitle title="Products" />
      <SectionHeader
        eyebrow="Catalogue"
        title="Shop frozen favourites"
        description="Search, sort and compare products across our most popular categories."
        action={<Button to="/cart" variant="secondary">Go to cart</Button>}
      />

      <Card className="p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name or SKU"
              className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-3">
            <SlidersHorizontal className="h-4 w-4 text-slate-500" />
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none"
            >
              <option value="popular">Sort by popularity</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
              <option value="stock">Availability</option>
            </select>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.key}
              type="button"
              onClick={() => setSelectedCategory(category.key)}
              className={`rounded-full px-3 py-2 text-sm font-medium ${selectedCategory === category.key ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.length ? filteredProducts.map((product) => <ProductCard key={product.id} product={product} />) : (
          <div className="md:col-span-2 xl:col-span-3">
            <Card className="py-12 text-center">
              <h3 className="text-xl font-bold text-slate-900">No items found</h3>
              <p className="mt-2 text-sm text-slate-600">Try a different search term or category filter.</p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
