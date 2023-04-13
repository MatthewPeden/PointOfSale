// A simple typescript page with violet and crimson colors

// Import React and React-DOM libraries
import React from 'react';
import { withRole, getServerSidePropsForManager } from './api/auth/RBAC.tsx';
// Use the getServerSideProps function for the manager role



// Define a component called App
class App extends React.Component {
  // Render the component
  render() {
    // Define some styles
    const styles = {
      container: {
        width: '80%',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
      },
      header: {
        backgroundColor: 'violet',
        padding: '20px',
        textAlign: 'center',
      },
      title: {
        color: 'white',
        fontSize: '36px',
      },
      content: {
        backgroundColor: 'crimson', // changed from pink to crimson
        padding: '20px',
      },
      paragraph: {
        color: 'black',
        fontSize: '18px',
      },
    };

    // Return the JSX code
    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.title}>Hello, world!</h1>
        </div>
        <div style={styles.content}>
          <p style={styles.paragraph}>
            This is a simple typescript page with violet and crimson colors.
          </p>
          <p style={styles.paragraph}>
            You can edit the code and see the changes in real time.
          </p>
        </div>
      </div>
    );
  }
}

// Export the App component as the default export
export default App;

export const getServerSideProps = getServerSidePropsForManager;