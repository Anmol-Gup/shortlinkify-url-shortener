import { useState } from "react"
import { app } from "../firebase"
import ShortUniqueId from 'short-unique-id';
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FaRegClipboard } from "react-icons/fa"
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore'

const UrlForm = ({user}) => {

    const [url, setUrl] = useState('')
    const uid = new ShortUniqueId();
    const shortId = uid.rnd(8)
    const [textToCopy, setTextToCopy] = useState(''); // The text you want to copy
    const [copyStatus, setCopyStatus] = useState(false); // To indicate if the text was copied

    const addUrl = async (e) => {
        e.preventDefault()

        if (!url) {
            alert("Please enter url");
            return;
        }

        try {
            const db=getFirestore(app)
            const docRef = await addDoc(collection(db, "urls"), {
                shortId,
                url,
                createdAt:serverTimestamp(),
                uid:user.uid,
                clicks:0
            });

            setTextToCopy(`http://127.0.0.1:5173/url/${shortId}`)
            setUrl('')

        } catch (error) {
            console.log(error.message)
        }
    }
    const onCopyText = () => {
        setCopyStatus(true);
        alert('Text copied to clipboard!')
        setTextToCopy('')
        setUrl('')
    };

    return (<section className="container flex-grow mx-auto flex flex-col items-center justify-center"> {/* Use flex-grow to allow the section to grow */}
        <div className="form px-2">
            <form method="post" className='flex justify-center items-center gap-2 flex-wrap' onSubmit={addUrl}>
                <input
                    onChange={(e) => setUrl(e.target.value)}
                    type="url"
                    value={url}
                    inputMode="url"
                    required
                    className="ring-1 ring-gray-300 focus:ring focus:ring-blue-300 w-96 md:w-[35rem] px-3 py-2 border focus:border-blue-400 placeholder-shown:border-gray-400 outline-none rounded"
                    placeholder="Type or Paste Your Link"
                />
                <input type="submit" value="Shorten URL" className='cursor-pointer font-semibold rounded p-2 bg-teal border-none text-white' />
            </form>
        </div>
        {
            textToCopy && <div className="py-2 flex justify-center mt-3">
                <div className="short-url w-fit flex justify-center items-center gap-2 p-2 rounded bg-green-300 font-medium">
                    <span>{textToCopy}</span>
                    <CopyToClipboard text={textToCopy} onCopy={onCopyText}>
                        <FaRegClipboard className="cursor-pointer" />
                    </CopyToClipboard>
                </div>
            </div>
        }
    </section>)
}

export default UrlForm