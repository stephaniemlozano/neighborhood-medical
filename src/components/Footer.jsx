const Footer = () => {

    const copyrightDate = () => {
        return new Date().getFullYear()
      }

    return (
        <footer>
            <p>
                Donations link here || QR code here
            </p>
            <p>
            Copyright © Neighborhood Medical| | {copyrightDate()} | all rights reserved
            </p>
        </footer>
    )

}

export default Footer;