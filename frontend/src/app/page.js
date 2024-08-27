import Image from "next/image";
import "./page.module.css"
import Footer from "./components/Footer";
import Logo from "./components/Logo";


export default function Home() {
    return (
        <>
            <main className="bg-warning-subtle">
                <Logo/>
                <div className="btn-container p-5">
                    <div className="row d-flex  flex-nowrap justify-content-center pb-3">
                        <button className="col-4 col-md-3 col-xl-1 mx-2 btn btn-primary custom-btn rounded-pill p-2">Actualités</button>
                        <button className="col-4 col-md-3 col-xl-1 btn btn-dark custom-btn rounded-pill p-2">Epreuves</button>
                        <button className="col-4 col-md-3 col-xl-1 mx-2 btn btn-danger custom-btn rounded-pill p-2">Conseils</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="col-4 col-md-3 col-xl-1 me-2 btn btn-warning rounded-pill p-2">Medailles</button>
                        <button className="col-4 col-md-3 col-xl-1 btn btn-success rounded-pill p-2">Interview</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
