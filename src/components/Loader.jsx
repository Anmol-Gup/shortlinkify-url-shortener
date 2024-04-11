import ReactLoading from "react-loading"

const Loader = () => {
    return (<div className="flex justify-center items-center h-screen">
        <ReactLoading type={'spokes'} color={'#03A680'} className="w-96"/>
    </div>
    )
}
export default Loader