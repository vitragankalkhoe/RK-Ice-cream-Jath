import { BrowserRouter, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import {
  BarChart3,
  Bell,
  ChevronDown,
  ClipboardList,
  ClipboardPenLine,
  CreditCard,
  Factory,
  Globe2,
  LayoutDashboard,
  Menu,
  Package,
  ReceiptText,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Truck,
  UserCog,
  Users,
  Warehouse,
} from 'lucide-react';

import HomePage from './pages/customer/HomePage';
import ProductsPage from './pages/customer/ProductsPage';
import ProductDetailsPage from './pages/customer/ProductDetailsPage';
import CartPage from './pages/customer/CartPage';
import LoginPage from './pages/customer/LoginPage';
import RegisterPage from './pages/customer/RegisterPage';
import ForgotPasswordPage from './pages/customer/ForgotPasswordPage';
import CheckoutPage from './pages/customer/CheckoutPage';
import CheckoutReviewPage from './pages/customer/CheckoutReviewPage';
import OrderConfirmationPage from './pages/customer/OrderConfirmationPage';
import MyOrdersPage from './pages/customer/MyOrdersPage';
import OrderDetailsPage from './pages/customer/OrderDetailsPage';
import PaymentPage from './pages/customer/PaymentPage';
import InvoicePage from './pages/customer/InvoicePage';
import ProfilePage from './pages/customer/ProfilePage';
import ContactPage from './pages/customer/ContactPage';
import AboutPage from './pages/customer/AboutPage';
import HowToOrderPage from './pages/customer/HowToOrderPage';
import TrackOrderPage from './pages/customer/TrackOrderPage';

import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminCreateOrderPage from './pages/admin/AdminCreateOrderPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminInventoryPage from './pages/admin/AdminInventoryPage';
import AdminDispatchPage from './pages/admin/AdminDispatchPage';
import AdminCustomersPage from './pages/admin/AdminCustomersPage';
import AdminSuppliersPage from './pages/admin/AdminSuppliersPage';
import AdminPaymentsPage from './pages/admin/AdminPaymentsPage';
import AdminInvoicesPage from './pages/admin/AdminInvoicesPage';
import AdminReportsPage from './pages/admin/AdminReportsPage';
import AdminSettingsPage from './pages/admin/AdminSettingsPage';

function CustomerLayout() {
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'About Us', to: '/about' },
    { label: 'How to Order', to: '/how-to-order' },
    { label: 'Track Order', to: '/track-order' },
    { label: 'Contact', to: '/contact' },
    { label: 'Cart', to: '/cart' },
    { label: 'Login', to: '/login' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 text-lg font-black text-white shadow-sm">RK</div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">RK Agency JATH</p>
                <p className="text-xs text-slate-500">Ice Cream & Frozen Products</p>
              </div>
            </div>

            <nav className="hidden items-center gap-2 xl:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `rounded-full px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-sky-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <button type="button" className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-2 text-sm font-medium text-slate-700">
                <Globe2 className="h-4 w-4" />
                <span className="hidden sm:inline">मराठी</span>
              </button>
              <button type="button" className="relative rounded-full border border-slate-200 bg-slate-50 p-2 text-slate-600">
                <ShoppingCart className="h-4 w-4" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-[10px] font-bold text-white">2</span>
              </button>
              <button type="button" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 xl:hidden">
                <Menu className="h-4 w-4" />
                Menu
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div>
            <h3 className="text-lg font-bold text-white">RK Agency JATH</h3>
            <p className="mt-3 text-sm text-slate-400">Quality Products | Trusted Service</p>
            <p className="mt-4 text-sm text-slate-400">Daflapur, Tal. Jath, Dist. Sangli, Maharashtra, India</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Quick links</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li><a href="/products">Products</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>+91 7769969772</li>
              <li>+91 9096525797</li>
              <li>rkagency22@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Business hours</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              <li>Mon-Sat: 9:00 AM - 9:00 PM</li>
              <li>Sunday: 10:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AdminLayout() {
  const navItems = [
    { label: 'Dashboard', to: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Orders', to: '/admin/orders', icon: ClipboardList },
    { label: 'Create Order', to: '/admin/orders/create', icon: ClipboardPenLine },
    { label: 'Products', to: '/admin/products', icon: Package },
    { label: 'Inventory', to: '/admin/inventory', icon: Warehouse },
    { label: 'Dispatch', to: '/admin/dispatch', icon: Truck },
    { label: 'Customers', to: '/admin/customers', icon: Users },
    { label: 'Suppliers', to: '/admin/suppliers', icon: Factory },
    { label: 'Payments & QR', to: '/admin/payments', icon: CreditCard },
    { label: 'Invoices', to: '/admin/invoices', icon: ReceiptText },
    { label: 'Reports', to: '/admin/reports', icon: BarChart3 },
    { label: 'Settings', to: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 flex-col bg-slate-950 text-slate-100 lg:flex">
          <div className="border-b border-slate-800 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500 font-black text-white">RK</div>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-sky-300">Admin</p>
                <p className="font-semibold">RK Agency JATH</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-2 p-4">
            {navItems.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${isActive ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="border-t border-slate-800 p-4">
            <button type="button" className="flex w-full items-center justify-between rounded-xl bg-slate-900 px-3 py-2 text-sm text-slate-200">
              <span className="flex items-center gap-2"><UserCog className="h-4 w-4" /> Admin user</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </aside>

        <div className="flex-1">
          <header className="border-b border-slate-200 bg-white/90 px-4 py-4 shadow-sm sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button type="button" className="rounded-xl border border-slate-200 p-2 text-slate-700 lg:hidden"><Menu className="h-5 w-5" /></button>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">Operations center</p>
                  <h1 className="text-lg font-bold text-slate-900">Management panel</h1>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button type="button" className="relative rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-600"><Bell className="h-4 w-4" /></button>
                <div className="hidden items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm md:flex">
                  <Search className="h-4 w-4 text-slate-500" />
                  <input className="w-36 border-0 bg-transparent outline-none" placeholder="Quick search" />
                </div>
                <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white"><ShieldCheck className="h-4 w-4" /> Admin</button>
              </div>
            </div>
          </header>

          <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:id" element={<ProductDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="checkout/review" element={<CheckoutReviewPage />} />
          <Route path="order-confirmation/:id" element={<OrderConfirmationPage />} />
          <Route path="my-orders" element={<MyOrdersPage />} />
          <Route path="my-orders/:id" element={<OrderDetailsPage />} />
          <Route path="payment/:orderId" element={<PaymentPage />} />
          <Route path="my-orders/:id/invoice" element={<InvoicePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="how-to-order" element={<HowToOrderPage />} />
          <Route path="track-order" element={<TrackOrderPage />} />
        </Route>

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="orders" element={<AdminOrdersPage />} />
          <Route path="orders/create" element={<AdminCreateOrderPage />} />
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="inventory" element={<AdminInventoryPage />} />
          <Route path="dispatch" element={<AdminDispatchPage />} />
          <Route path="customers" element={<AdminCustomersPage />} />
          <Route path="suppliers" element={<AdminSuppliersPage />} />
          <Route path="payments" element={<AdminPaymentsPage />} />
          <Route path="invoices" element={<AdminInvoicesPage />} />
          <Route path="reports" element={<AdminReportsPage />} />
          <Route path="settings" element={<AdminSettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
