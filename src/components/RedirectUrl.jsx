import { useParams } from "react-router-dom"
import {app} from '../firebase'
import { collection, getFirestore, getDocs, query, where } from "firebase/firestore"
import { useEffect } from "react"

const RedirectUrl=()=>{
    const {shortId}=useParams()    
    
    useEffect(()=>{
        getUrls()
    },[])

    const getUrls=async()=>{
        try{
            const db=getFirestore(app)
            const docRef=collection(db,'urls')
            const q=query(docRef,where('shortId','==',shortId))
            const querySnapshot=await getDocs(q)
            window.location.replace(querySnapshot.docs[0].data().url)
        }
        catch(error){
            console.log(error.message)
        }
    }


    return(<></>)
}
export default RedirectUrl