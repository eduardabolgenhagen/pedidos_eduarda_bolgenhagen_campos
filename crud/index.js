const { initializeApp } = require('firebase/app');
const {
    getFirestore,
    collection,
    doc,
    setDoc,
    addDoc,
    query,
    were,
    getDocs,
    getDoc,
    deleteDoc
} = require('firebase/firestore/lite');

const firebaseConfig = {
    apiKey: "AIzaSyCv0ygRLkGYONhv21YY0RIVnpwynGRF-v4",
    authDomain: "pedido-eduarda.firebaseapp.com",
    projectId: "pedido-eduarda",
    storageBucket: "pedido-eduarda.appspot.com",
    messagingSenderId: "530442697479",
    appId: "1:530442697479:web:d7d6fa2aab41b3ee1223a2",
    measurementId: "G-MJV774FY0S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function save(table, id, data) {
    if (id) {
        const referenceEntity = await setDoc(doc(db, table), data);
        const saveData = {
            ...data,
            id: referenceEntity.id
        }
        return saveData;
    } else {
        const referenceEntity = await addDoc(collection(db, table), data);
        const saveData = {
            ...data,
            id: referenceEntity.id
        }
        return saveData;
    }
};

async function get(table) {
    const refTable = collection(db, table);
    const q = query(refTable);
    const querySnapshot = await getDocs(q);
    const list = [];

    querySnapshot.forEach((doc) => {
        const data = {
            ...doc.data(),
            id: doc.id
        }
        list.push(data);
    })
    return list;
};

async function getById(table, id) {
    const docRef = doc(db, table, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return new Erros("Not found!");
    }
};

async function remove(table, id) {
    const data = await deleteDoc(doc(db, table, id));
    console.log("Removido com sucesso");
    return {
        message: `${id} removido!`
    }
};

// async function editar(){

// }

module.exports = {
    save,
    get,
    getById,
    remove
};
