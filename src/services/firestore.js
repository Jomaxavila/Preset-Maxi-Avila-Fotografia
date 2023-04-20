import { initializeApp } from "firebase/app";
import { getFirestore, orderBy, collection, getDocs, doc, getDoc, query, where, addDoc, } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD40Edb_QZ2cGWYb1Sl3xhvXZMW-6x52Yo",
  authDomain: "react-coder-b1d34.firebaseapp.com",
  projectId: "react-coder-b1d34",
  storageBucket: "react-coder-b1d34.appspot.com",
  messagingSenderId: "926772887430",
  appId: "1:926772887430:web:02cb63ebc7b6a3d923b607"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getItems() {
  const productsRef = collection(db, "products");
  const q = query(productsRef, orderBy("index"));
  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;
  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return docsData;
}

export async function getSingleItem(idURL) {
  const docRef = doc(db, "products", idURL);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}

export async function getItemsByCategory(categoryid) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", categoryid));
  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;
  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });

  return docsData;
}

export async function createOrder(order) {
  const collectionOrdersRef = collection(db, "orders");
  const response = await addDoc(collectionOrdersRef, order);
  return response.id; 
}

