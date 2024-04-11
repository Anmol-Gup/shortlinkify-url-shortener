const Footer = () => {
    return (<footer className="text-center p-3 bg-gunmetal text-lightgray mt-auto text-sm sm:text-base"> {/* Use mt-auto to push the footer to the bottom */}
        <p className="py-1 text-sm">&copy; Copyright {new Date().getFullYear()} ShortLinkify. All Rights Reserved.</p>
    </footer>)
}

export default Footer