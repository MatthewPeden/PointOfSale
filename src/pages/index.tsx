import Profile from '@/components/Profile';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  text: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  button: {
    fontSize: '1.5rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: '0.5rem',
    cursor: 'pointer',
  },
};

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (user) {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome {user.name}!</h1>
        <Profile></Profile>
        <p style={styles.text}>You are logged in with Auth0.</p>
        <a href="/api/auth/logout">Log out</a>
        <ul>
          <li>
            <Link href="/drawTest">Draw Test</Link>
          </li>
          <li>
            <Link href="/payments_report">Payments Report</Link>
          </li>
          <li>
            <Link href="/inventory_items_report">Inventory Items Report</Link>
          </li>
          <li>
            <Link href="/orders_report">Orders Report</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/inventory_items">Inventory Items</Link>
          </li>
          <p></p>
          <li>
            <Link href="/roleprotected">NEW ROLE TESTING</Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Zamaco POS</h1>
        <p style={styles.text}>Please log in to continue.</p>
        <button style={styles.button} onClick={() => (window.location.href = '/api/auth/login')}>
          Log in
        </button>
      </div>
    );
  }
}
