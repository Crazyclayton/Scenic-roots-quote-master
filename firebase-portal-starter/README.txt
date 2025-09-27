SCENIC ROOTS — Firebase Client/Employee Portal Starter
======================================================

Upload-and-go starter (plain HTML + JS via Firebase CDN).

Files
-----
- index.html     : Sign up / Sign in page with role selection (client or employee). Routes after login.
- client.html    : Client portal placeholder with auth+role guard.
- employee.html  : Employee portal placeholder with auth+role guard.
- firebase.js    : Firebase bootstrapping using CDN imports. **Paste your firebaseConfig here.**
- app.css        : Minimal styling.
- firestore.rules: Suggested Firestore security rules.

Setup (5 minutes)
-----------------
1) Create a Firebase project → Add a Web App → Copy your firebaseConfig.
2) Open firebase.js and replace the firebaseConfig object with your values.
3) In Firebase Console:
   - Authentication → Get started → enable Email/Password.
   - Firestore Database → Create database (production mode).
   - Authentication → Settings → Authorized domains → add your deployed domain (vercel.app, netlify.app, github.io, etc.).
4) Deploy these files anywhere (Vercel, Netlify, GitHub Pages, simple web hosting). You can also open index.html locally in a browser.
5) Sign up a user and choose a role. You'll be auto-routed to the matching portal.

Firestore Rules (apply these)
-----------------------------
Copy firestore.rules into the Firestore Rules editor and Publish.

Notes
-----
- Config values are not secrets. Security is enforced by Firestore rules.
- You can change a user's role later by editing their document: /users/{uid}.role in Firestore.
- Expand the portals by replacing the placeholders with your actual UI and features.
