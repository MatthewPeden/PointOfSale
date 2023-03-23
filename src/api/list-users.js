// src/api/list-users.js

const express = require("express");
//  const jwt = require("express-jwt");
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const { auth } = require("express-oauth2-bearer");

// Create an Express app
const app = express();

// Define your Auth0 domain and audience
const auth0Domain = process.env.AUTH0Domain;
 const auth0Audience = process.env.AUTH0_AUDIENCE;

// Define a middleware to validate and check the access token
app.use(
  jwt({
    // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${auth0Domain}/.well-known/jwks.json`,
    }),

    // Validate the audience and issuer
    audience: auth0Audience,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    algorithms: ["RS256"],
  })
);

// Define another middleware to check if the user has a specific scope
app.use(auth({ requiredScopes: ["read:users"] }));

// Define your logic for listing users by role
app.get("/", async (req, res) => {
  try {
    // Get the role from query parameters
    const { role } = req.query;

    // Check if role is provided
    if (!role) {
      return res.status(400).json({ error: "Missing role parameter" });
    }

    // Import Auth0 Management API SDK
    const ManagementClient = require("auth0").ManagementClient;

    // Initialize Auth0 Management API client with your credentials
    const management = new ManagementClient({
      domain: auth0Domain,
      clientId: "process.env.AUTH0_CLIENTID",
      clientSecret: "K6rhuHd9vIvdtlhdPxq2DdaUH8oN1WiCY38umCq2VLbo1rLoBkV24nODw9N-HeIE",
      scope: "read:users",
      audience: `https://${auth0Domain}/api/v2/`,
    });

    // Get all users with a specific role using Auth0 Management API SDK
    const users = await management.getUsersInRole({ id: role });

    // Return users as JSON response
    res.status(200).json(users);
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error });
  }
});

module.exports.handler = app;