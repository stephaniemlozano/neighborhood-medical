const Footer = () => {

    const copyrightDate = () => {
        return new Date().getFullYear()
      }

    return (
        <footer>
            <p className="pFooter">
                Donations link here || QR code here
            </p>
            < p className="pFooter">
            Copyright © Neighborhood Medical| | {copyrightDate()} | all rights reserved
            </p>
        </footer>
    )

}

export default Footer;