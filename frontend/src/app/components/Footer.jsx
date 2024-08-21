'use client'
import Image from "next/image"
import { useState, useEffect } from "react";

export default function Footer() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        // Set the initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <footer style={{ boxShadow: '0 -5px 10px -5px #D3D3D3' }}>
                <div>
                    {isMobile ? (
                        <>
                                <h2 className="text-center">L'odyssé Olympique</h2>
                                <div className="d-flex justify-content-center position-relative" style={{ height: '10vh' }}>
                                    <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_anneaux.png'}
                                        fill objectFit="contain"
                                    />
                                </div>
                                <p className="fw-bold">Localisation :</p>
                                <div>
                                    <p>123 rue de la mer</p>
                                    <p>66600, Salses-le-Château</p>
                                </div>
                                <div className="pe-5">
                                    <p className="fw-bold">Nous contacter:</p>
                                    <div className="row">
                                        <div className="col-2 img-container position-relative" style={{ height: '5vh' }}>
                                            <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_fbk.png'}
                                                fill objectFit="contain"
                                            />
                                        </div>
                                        <div className="col-2 img-container position-relative" style={{ height: '5vh' }}>
                                            <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_insta.png'}
                                                fill objectFit="contain"
                                            />
                                        </div>
                                        <div className="col-2 img-container position-relative" style={{ height: '5vh' }}>
                                            <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_x.png'}
                                                fill objectFit="contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <a className="text-underline text-black mb-3">Mentions légales</a>
                                <a className="text-underline text-black">Politique de confidentialité</a>
                        </>
                    ) : (
                        <div className="row">
                            <div className="col p-5">
                                <p className="fw-bold">Localisation :</p>
                                <div>
                                    <p>123 rue de la mer</p>
                                    <p>66600, Salses-le-Château</p>
                                </div>
                                <div className="pe-5">
                                    <p className="fw-bold">Nous contacter:</p>
                                    <div className="row">
                                        <div className="col-2 img-container position-relative" style={{ height: '5vh' }}>
                                            <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_fbk.png'}
                                                fill objectFit="contain"
                                            />
                                        </div>
                                        <div className="col-2 img-container position-relative" style={{ height: '5vh' }}>
                                            <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_insta.png'}
                                                fill objectFit="contain"
                                            />
                                        </div>
                                        <div className="col-2 img-container position-relative" style={{ height: '5vh' }}>
                                            <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_x.png'}
                                                fill objectFit="contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col p-4 d-flex flex-column justify-content-center">
                                <h2 className="text-center text-nowrap">L'odyssé Olympique</h2>
                                <div className="d-flex justify-content-center position-relative" style={{ height: '10vh' }}>
                                    <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_anneaux.png'}
                                        fill objectFit="contain"
                                    />
                                </div>
                            </div>
                            <div className="col  p-5 d-flex flex-column justify-content-center">
                                <a className="text-underline text-black mb-3">Mentions légales</a>
                                <a className="text-underline text-black">Politique de confidentialité</a>
                            </div>
                        </div>
                    )}
                </div>

            </footer>

        </>
    )

}