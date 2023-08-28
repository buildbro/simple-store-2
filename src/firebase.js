import firebase from 'firebase';
import { onUnmounted, ref } from 'vue';

const firebaseConfig = {

    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""

};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const inventoryCollection = db.collection("inventory");

export const createUser = user => {
    user.created_at = firebase.firestore.Timestamp.now()
    //const id = usersCollection.doc().id
    return usersCollection.doc(user.userId).set(user)
}

export const useLoadInventory = () => {
    const items = ref([]);
    const close = inventoryCollection.onSnapshot(snapShot => {
        items.value = snapShot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });

    onUnmounted(close);

    return items;
}

export const createItem = item => {
    inventoryCollection.add(item)
}

export const uploadFile = async file => {
    const storageRef = firebaseApp.storage().ref();
    let imgURL = '';
    let saveData;

    const d = new Date();
    let time = d.getTime();
    const extArr = file.name.split(".");
    const extension = extArr[extArr.length-1];
    const ref = storageRef.child(time+'.'+extension);
    
    saveData = await ref.put(file).then((snapshot) => {
        return snapshot.ref.getDownloadURL();
    })

    return saveData;

}