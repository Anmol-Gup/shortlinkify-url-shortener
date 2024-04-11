import { FaTrashAlt } from "react-icons/fa";

const Url = ({ shortId, url, clicks, remove, statistics }) => {
    const shortUrl=`http://localhost:5173/url/${shortId}`
    return (<tr>
        <td className="sm:px-3 px-6 py-4">
            <a href={shortUrl} target="_blank" className="underline decoration-sky-500 text-sky-500" onClick={statistics}>{shortUrl}</a>
        </td>
        <td className="sm:px-3 px-6 py-4">
            <a href={url} target="_blank" className="underline decoration-sky-500 text-sky-500">{url}</a>
        </td>
        <td className="sm:px-3 px-6 py-4">
            {clicks}
        </td>
        <td className="sm:px-3 px-6 py-4 text-right cursor-pointer">
            <FaTrashAlt className="text-[red]" onClick={remove}/>
        </td>
    </tr>)
}
export default Url