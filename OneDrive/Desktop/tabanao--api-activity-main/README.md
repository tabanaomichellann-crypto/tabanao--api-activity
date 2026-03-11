 [ ✓ ] Code runs via npm run dev with no errors.
 [ ✓ ] Registration and Login endpoints are functional.
 [ ✓ ] Middleware correctly blocks unauthorized users.
 [ ✓ ] GitHub Repo link submitted.
 [ ✓ ] README.md updated with the following answers:

README.md Questions:
 Authentication vs Authorization:
o What is the difference between Authentication and Authorization in our code?
o Answer:Authentication is the process of verifying the identity of a user. In our system, this happens when a user logs in using their email/username and password. The system checks the credentials and confirms that the user is legitimate.Authorization, on the other hand, determines what an authenticated user is allowed to do. After login, the system checks the user's role or permissions to decide whether they can access certain routes, data, or system features.

Security (bcrypt):
o Why did we use bcryptjs instead of saving passwords as plain text in
MongoDB?
o Answer:We use bcryptjs to hash passwords before storing them in the database. This improves security because hashed passwords cannot easily be converted back to their original form. If passwords were stored as plain text in MongoDB, anyone who gains access to the database could see all user passwords. With bcryptjs, even if the database is compromised, attackers cannot easily determine the original passwords because they are encrypted using a secure hashing algorithm.

JWT Structure:
o What does the protect middleware do when it receives a JWT from the
client?
o Answer:When the protect middleware receives a token from the client, it performs the following steps using JSON Web Token (JWT):

It checks if the request contains a token in the Authorization header.
It verifies the token using the server's secret key.
If the token is valid, it decodes the token to get the user's information (such as user ID).
It finds the user in the database and attaches the user data to the request object.
If the token is invalid or missing, the middleware denies access and returns an unauthorized error.
This ensures that only authenticated users can access protected routes in the system.