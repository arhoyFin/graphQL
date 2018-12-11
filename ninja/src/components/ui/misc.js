
export const firebaseLooper = (snapshot) =>{
    const data = [];
    snapshot.docs.forEach(doc => {
        data.push({...doc.data()})
    });
    
    return data;
}
