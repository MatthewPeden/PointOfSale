// Import the useUser hook from the Auth0 Next.js SDK
import Profile from '@/components/Profile';

// Import the Link component from Next.js
import Link from 'next/link';

// Define a custom component for the page
export default function Home() {

// If the user is logged in, show a welcome message and a logout button

    return (
      <div>
        <h1>Welcome!</h1>
        <Profile></Profile>
<a href="/api/auth/login">Login</a>
        <p>You are logged in with Auth0.</p>
        <a href="/api/auth/logout">Log out</a>
        <ul>
          <li><Link href="/drawTest">Draw Test</Link></li>
          <li><Link href="/payments_report">Payments Report</Link></li>
          <li><Link href="/reports_test">Reports Test</Link></li>
          <li><Link href="/inventory_items_report">Inventory Items Report</Link></li>
          <li><Link href="/orders_report">Orders Report</Link></li>
          <li><Link href="/protected">Protected</Link></li>
        </ul>
      </div>
    );

  // If the user is not logged in, show a login button
  return (
    <div>
      <h1>Next.js Auth0 Example</h1>
      <p>Please log in to continue.</p>
      <a href="/api/auth/login">Log in</a>
    </div>
  );
}
