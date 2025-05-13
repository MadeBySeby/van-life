import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyCj-1H958CILpT8sSoUonrH9zX0So7jciY",
  authDomain: "van-lifescrimba.firebaseapp.com",
  projectId: "van-lifescrimba",
  storageBucket: "van-lifescrimba.firebasestorage.app",
  messagingSenderId: "1073159982814",
  appId: "1:1073159982814:web:bf4506a30c89799ffefc4f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "users");

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function getVan(id) {
  const docRef = doc(db, "users", id);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));

  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
