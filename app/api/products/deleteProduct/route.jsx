import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { NextResponse } from 'next/server';

export async function DELETE(req) {
    try {
        // Parse the request body
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: 'Document ID is required' }, { status: 400 });
        }

        // Perform the delete operation
        await deleteDoc(doc(db, 'products', id));

        // Return a successful response
        return NextResponse.json({ message: `Document ${id} deleted` }, { status: 200 });
    } catch (error) {
        // Return an error response if something goes wrong
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
