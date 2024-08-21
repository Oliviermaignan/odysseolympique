import Image from "next/image";
import "./page.module.css"
import Footer from "./components/Footer";

export default function Home() {
    return (
        <>
            <main className="bg-warning-subtle">
                    <div className="position-relative" style={{ height: '45vh' }}>
                        <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_jo.png'}
                            fill objectFit="contain" className="pt-5"
                        />
                </div>
                <div className="btn-container p-5">
                    <div className="row d-flex justify-content-center pb-3">
                        <button className="col-1 mx-3 btn btn-primary custom-btn rounded-pill p-2">Actualités</button>
                        <button className="col-1 mx-4 btn btn-dark custom-btn rounded-pill p-2">Epreuves</button>
                        <button className="col-1 mx-4 btn btn-danger custom-btn rounded-pill p-2">Conseils</button>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="col-1 mx-4 btn btn-warning rounded-pill p-2">Medailles</button>
                        <button className="col-1 mx-4 btn btn-success rounded-pill p-2">Interview</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
