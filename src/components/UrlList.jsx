import Url from "./Url";
import { collection, getDocs, query, where, getFirestore, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { app } from '../firebase'

const UrlList = ({ urls }) => {

    const removeUrl = async (id) => {
        if (confirm('Are you sure you want to delete?')) {
            try {
                const db = getFirestore(app)
                await deleteDoc(doc(db, "urls", id));
            }
            catch (error) {
                console.log(error.message)
            }
        }
        else
            return
    }

    return (urls.length === 0 ? <section className="flex-grow grid place-items-center">
        <img src="no-data.svg" alt="no data" className="w-96" />
    </section> : <section className="flex-grow container mx-auto mt-6 px-4 py-3">
        <h2 className="text-2xl font-bold text-center">My Urls</h2>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs uppercase bg-teal text-white">
                    <tr>
                        <th scope="col" className="px-3 py-3">
                            Shorten Link
                        </th>
                        <th scope="col" className="px-3 py-3">
                            Original Link
                        </th>
                        <th scope="col" className="px-3 py-3">
                            Clicks
                        </th>
                        <th scope="col" className="px-3 py-3">
                            Remove
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        urls.map((doc, index) => {
                            // const { shortId, url, clicks } = doc.data()
                            const { shortId, url, clicks } = doc
                            return (<Url key={index + 1} shortId={shortId} url={url} clicks={clicks} remove={() => removeUrl(doc.id)} />)
                        })
                    }
                </tbody>
            </table>
        </div>
    </section>)
}
export default UrlList