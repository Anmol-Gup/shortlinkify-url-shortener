import Header from "./Header"
import Footer from "./Footer"
import { Navigate } from 'react-router-dom'
import { app } from "../firebase";
import { collection, query, where, getFirestore, onSnapshot} from "firebase/firestore";
import { useEffect, useState } from "react";
import UrlList from "./UrlList";
import Loader from "./Loader";

const MyUrls = ({ user }) => {
    const [urls, setUrls] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    
    useEffect(() => {
        document.title = 'My URLs-ShortLinkfy'
        getUrls(user?.uid)
    }, [])
    
    const getUrls = async (uid) => {
        try {
            const db = getFirestore(app)
            const docRef = collection(db, 'urls')
            const q = query(docRef, where('uid', '==', uid))
            
            // onSnapshot method from Firebase Firestore to listen for real-time updates to a Firestore query
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const updatedUrls = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUrls(updatedUrls);
                setIsLoading(false)
            });
            
            return unsubscribe
        }
        catch (error) {
            console.log(error.message)
        }
    }

    if (isLoading) {
        return <Loader />;
    }

    return (<div className='min-h-screen flex flex-col'>
        <Header user={user} />
        {!urls ? <section className="flex-grow grid place-items-center">
            <img src="no-data.svg" alt="no data" className="w-96" />
        </section> : <UrlList urls={urls} />}
        <Footer />
    </div>)
}

export default MyUrls