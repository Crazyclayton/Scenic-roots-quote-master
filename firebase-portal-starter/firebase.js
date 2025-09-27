// Firebase bootstrap (CDN, v10+). Replace the firebaseConfig object with your own from Firebase console.
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
  // measurementId: "G-XXXXXXX" // optional
};

export async function initFirebase() {
  const appModule = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
  const authModule = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js");
  const fsModule   = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");

  const app = appModule.initializeApp(firebaseConfig);
  const auth = authModule.getAuth(app);
  const db   = fsModule.getFirestore(app);

  // Re-export common functions for convenience
  return {
    app,
    auth,
    db,
    ...authModule,
    ...fsModule,
  };
}
