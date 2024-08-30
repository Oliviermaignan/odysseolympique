import Image from 'next/image'
import './page.module.css'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <main className="bg-warning-subtle">
                <Logo />
                <div className="btn-container p-5">
                    <div className="row d-flex  flex-nowrap justify-content-center pb-3">
                        <Link href={'/articles/' + 'actualites'} className='col-4 col-md-3 col-xl-1 mx-2 '>
                            <button className="btn btn-primary custom-btn rounded-pill p-2">
                                Actualités
                            </button>
                        </Link>
                        <Link href={'/articles/' + 'epreuves'} className='col-4 col-md-3 col-xl-1 mx-2 '>
                            <button className="btn btn-dark custom-btn rounded-pill p-2">
                                Epreuves
                            </button>
                        </Link>
                        <Link href={'/articles/' + 'conseils'} className='col-4 col-md-3 col-xl-1 mx-2 '>
                            <button className="btn btn-danger custom-btn rounded-pill p-2">
                                Conseils
                            </button>
                        </Link>
                    </div>
                    <div className="row d-flex justify-content-center" >
                        <Link href={'/articles/' + 'medailles'} className='col-4 col-md-3 col-xl-1 mx-2 '>
                            <button className="btn btn-warning rounded-pill p-2">
                                Medailles
                            </button>
                        </Link>
                        <Link href={'/articles/' + 'interview'} className='col-4 col-md-3 col-xl-1 mx-2 '>
                            <button className="btn btn-success rounded-pill p-2">
                                Interview
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
