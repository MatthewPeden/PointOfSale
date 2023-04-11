// pages/categories.js
import Link from 'next/link';
import executeQuery from '../../lib/db';

// Fetch the posts data from the API at request time
export async function getServerSideProps() {
  const result = await executeQuery({ query: 'SELECT * FROM categories' });
  // Check for errors
  if (result.error) {
    return { notFound: true };
  } else {
    // Return the posts as props
    return {
      props: {
        categories: JSON.parse(JSON.stringify(result)) // <== use JSON.parse and JSON.stringify here
      }
    };
  }
}

// Display the posts as a list of links
export default function Categories({ categories }) {
  return (
    (
      <>
        <div>
          <h1>Categories</h1>
          <ul>
            {categories.map(category => (
              <li key={category.category_id}>
                <Link href={`/categories/${category.category_id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    )
  );
}