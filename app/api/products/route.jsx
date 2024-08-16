import { NextResponse } from 'next/server';
import {db} from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore"; 
export async function GET(request) {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log('products');
    return NextResponse.json({ data: products }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error}, { status: 500 });
  }
  
}
