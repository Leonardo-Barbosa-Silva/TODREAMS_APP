import Header from '../../components/Header'
import Footer from '../../components/Footer'


export default function Main() {
    
    return (
        <div className="main-page-container">
            <Header />

            <section className="main-content">
                <div className="content-heading">
                    <h2>Write. Make. Go to Your <div className="heading-dreams">Goals & Dreams</div></h2>
                </div>

                <div className="wrapper-img">
                    <img src="./pictures/dream.png" alt="" />
                </div>
            </section>

            <Footer />
        </div>
    )
}