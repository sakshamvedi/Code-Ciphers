import { db } from './Firebase';
import {
    collection,
    getDocs,
    addDoc,
    getDoc,
    updateDoc,
    setDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

// Define the collection reference
if (localStorage.getItem("streaksmailz6527") == null) {
    console.log("Not logged in");
}
else {
    var collectionRef = collection(db, "global");

    // Function to add data to the collection
    var addData = async (docId, data) => {
        var docRef = doc(collectionRef, docId);
        try {
            var newDocRef = await setDoc(docRef, data);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    // Function to update data in a document
    var updateData = async (docId, newData) => {
        try {
            var docRef = doc(collectionRef, docId);
            await updateDoc(docRef, newData);
            console.log("Document updated with ID: ", docId);
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    };

    // Function to delete a document
    var deleteData = async (docId) => {
        try {
            var docRef = doc(collectionRef, docId);
            await deleteDoc(docRef);
            console.log("Document deleted with ID: ", docId);
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    // Function to get all documents in the collection
    var getAllData = async () => {
        try {
            var querySnapshot = await getDocs(collectionRef);
            var data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            return data;
        } catch (error) {
            console.error("Error getting documents: ", error);
            return [];
        }
    };

    var getDataByDocId = async (docId) => {
        try {
            var docRef = doc(collectionRef, docId);
            const snapshot = await getDoc(docRef);
            var data = [];
            if (snapshot.exists()) {
                var data = { id: snapshot.id, ...snapshot.data() };
                return data;
            } else {
                console.log("Document not found.");
            }

        } catch (error) {
            console.log(error);

        }
    }
}

export { addData, updateData, deleteData, getAllData, getDataByDocId };
