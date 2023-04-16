// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  addDoc,
  collection,
  query,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import movies from '../disneyPlusMoviesData.json';

const firebaseConfig = {
  apiKey: 'AIzaSyBDpRIZE6_VC69iSAZPU0cUI6vvItUS8Fc',
  authDomain: 'disneyplus-clone-5390a.firebaseapp.com',
  projectId: 'disneyplus-clone-5390a',
  storageBucket: 'disneyplus-clone-5390a.appspot.com',
  messagingSenderId: '493554175810',
  appId: '1:493554175810:web:69443294d7ea3edb9602db',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

export async function signInWithGooglePopup() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
}

export async function signOutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out with Google:', error);
  }
}

export function onAuthStateChangedListener(callback) {
  onAuthStateChanged(auth, callback);
}

export const insertMovie = async () => {
  try {
    for (let i = 1; i <= 16; i++) {
      const movieData = movies.movies[i];
      console.log(movieData);
      const movieRef = await addDoc(collection(db, 'movie'), movieData);
      console.log('Movie added with ID: ', movieRef.id);
    }
  } catch (error) {
    console.error('Error adding movie: ', error);
  }
};

export const fetchMovies = async () => {
  const movieQuery = query(collection(db, 'movie'));

  const recommended = [],
    newDisney = [],
    originals = [],
    trending = [];

  const querySnapshot = await getDocs(movieQuery);
  querySnapshot.forEach((doc) => {
    switch (doc.data().type) {
      case 'recommend':
        recommended.push({ id: doc.id, ...doc.data() });
        break;
      case 'new':
        newDisney.push({ id: doc.id, ...doc.data() });
        break;
      case 'original':
        originals.push({ id: doc.id, ...doc.data() });
        break;
      case 'trending':
        trending.push({ id: doc.id, ...doc.data() });
        break;
    }
  });

  return {
    recommended,
    newDisney,
    originals,
    trending,
  };
};

export async function fetchMovieById(movieId) {
  try {
    const docRef = doc(db, 'movie', movieId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      return docSnap.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}
