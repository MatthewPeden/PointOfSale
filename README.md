Here are the installation instructions for the Zamaco Point of Sale (POS) system created with Next.js. This guide assumes that you have already set up your MySQL database and focuses on the configuration required to connect Next.js to MySQL.

Clone the repository or download the source code of the POS system:

```Copy code
git clone https://github.com/ZaneWillgruber/PointOfSale.git
```
If you downloaded a zip archive, extract it to a folder of your choice.

Install Node.js on your system if you haven't already. You can download the latest version of Node.js from the official website: https://nodejs.org/

Navigate to the root directory of your POS system (where the package.json file is located) using the command line or terminal.

Install the project dependencies:

```Copy code
npm install
```
Set up the environment variables:

Edit the file named .env.local in the root directory of your project. This file will store the MySQL connection details.

Edit the following variables to the .env.local file, replacing the placeholders with your own MySQL database information:

```Copy code
DB_HOST=<your-database-host>
DB_PORT=<your-database-port>
DB_USER=<your-database-username>
DB_PASSWORD=<your-database-password>
DB_NAME=<your-database-name>
```
Make sure to save the file after adding the variables.

```Copy code
npm run dev
```
This command will start the Next.js development server on the default port (usually 3000) or the port specified in your package.json file.

Open your web browser and navigate to http://localhost:3000 (or the appropriate port) to access the POS system.

That's it! Your Next.js POS system should now be connected to your MySQL database.
