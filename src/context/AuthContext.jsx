// import { useContext, createContext, useEffect, useState } from "react";
// import {
//   GoogleAuthProvider,
//   signInWithRedirect,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../api/firebase.config";

// //Creo el contexto
// const AuthContext = createContext();

// const AuthContextProvider = ({ children }) => {
//   const [admin, setAdmin] = useState({});

//   const googleSingIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithRedirect(auth, provider);
//   };

//   const googleLogout = () => {
//     signOut(auth);
//   };
//   useEffect(() => {
//     const unSubcribe = onAuthStateChanged(auth, (user) => {
//       setAdmin(user);
//     });
//     return () => {
//       unSubcribe();
//     };
//   }, []);

//   return (
//     <AuthContext.Provider value={{ googleSingIn, googleLogout, admin }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const AdminAuth = () => {
//   return useContext(AuthContext);
// };

// export default AuthContextProvider;

/*
GoogleAuthProvider, // para consumir la api de google
signInWithRedirect, // la ventana de autenticación en pagina, para modal signInWithPopup
signOut, 
onAuthStateChanged //estado de la autenticación
*/
