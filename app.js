// Get a list of Shoes from your database
async function getShoes(db) {
    const shoesCol = collection(db, 'shoes');
    const shoesSnapshot = await getDocs(shoesCol);
    const shoesList = shoesSnapshot.docs.map(doc => doc.data());
    return shoesList;
  }