import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';  // Adjust the path according to your project structure
import { NextResponse } from 'next/server';

export async function PUT(req) {
    try {
        // Parse the request body
        const { pId, pTitle, pPrice, pQuantity } = await req.json();

        if (!pId) {
            return NextResponse.json({ error: 'Document ID is required' }, { status: 400 });
        }
        const docRef = doc(db, 'products', pId);
        await updateDoc(docRef, {
            title: pTitle,
            price: pPrice,
            quantity: pQuantity,
        });
        return NextResponse.json({ message: `Document ${pId} updated successfully` }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
