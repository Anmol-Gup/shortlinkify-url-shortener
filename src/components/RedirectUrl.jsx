import { useParams } from "react-router-dom"
import { app } from '../firebase'
import { collection, getFirestore, getDocs, query, where, updateDoc, increment, onSnapshot } from "firebase/firestore"
import { useEffect } from "react"

const RedirectUrl = () => {
    const { shortId } = useParams()

    useEffect(() => {
        const getUrls = async () => {
            try {
                const db = getFirestore(app)
                const docRef = collection(db, 'urls')
                const q = query(docRef, where('shortId', '==', shortId))
                const querySnapshot = await getDocs(q)

                const clicks=querySnapshot.docs[0].data().clicks+1
                await updateDoc(querySnapshot.docs[0].ref, { clicks: clicks })

                window.location.replace(querySnapshot.docs[0].data().url)
            }
            catch (error) {
                console.log(error.message)
            }
        }

        getUrls()

    }, [shortId])

    return (<></>)
}
export default RedirectUrl