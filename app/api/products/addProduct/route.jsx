import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {

        const { pTitle, pPrice, pQuantity } = await req.json();
        const docRef = await addDoc(collection(db, 'products'), {
            title: pTitle,
            price: pPrice,
            quantity: pQuantity,
        });

        console.log('Document written with ID: ', docRef.id);

        // Return a successful response with the document ID
        return NextResponse.json({ data: { id: docRef.id } }, { status: 201 });
    } catch (error) {
        // Return an error response if something goes wrong
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
