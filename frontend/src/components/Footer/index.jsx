export default function Footer() {

    const github = "https://github.com/Leonardo-Barbosa-Silva"
    const linkedin = "https://www.linkedin.com/in/leonardo-barbosa-silva"
    const instagram = "https://www.instagram.com/leoz_bs/"
    
    return (
        <div className="footer-container">
            <div className="footer-copy">
                <p>&copy; 2023 Leonardo B. Silva - All rights reserved.</p>
            </div>

            <div className="footer-icons">
                <a href={`${github}`}><img src="./pictures/github.png" alt="" className=""/></a>
                <a href={`${linkedin}`}><img src="./pictures/linkedin.png" alt="" className=""/></a>
                <a href={`${instagram}`}><img src="./pictures/instagram.png" alt="" className=""/></a>
            </div>
        </div>
    )
}