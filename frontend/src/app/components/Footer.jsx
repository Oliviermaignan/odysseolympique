'use client'
import Image from "next/image"
import { useState, useEffect } from "react";

export default function Footer() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <footer style={{ boxShadow: '0 -5px 10px -5px #D3D3D3' }}>
                <div>
                    {isMobile ? (
                        <>
                            <div className="bg-white">
                                <div className="py-4">
                                    <div className="d-flex justify-content-center position-relative" style={{ height: '12vh' }}>
                                        <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_anneaux.png'}
                                            fill objectFit="contain"
                                        />
                                    </div>
                                </div>
                                <h2 className="text-center pb-4">L'odyssé Olympique</h2>
                                <p className="fw-bold text-center pb-3">Localisation :</p>
                                <div>
                                    <p className="text-center">123 rue de la mer,</p>
                                    <p className="text-center" style={{ marginTop: '-04%' }}>66600, Salses-le-Château</p>
                                </div>

                                <hr className="my-4 bg-warning text-warning border-2 m-auto" style={{ width: '60%', height: '2px' }} />

                                <p className="fw-bold text-center">Nous contacter:</p>

                                <div className="row d-flex justify-content-center">
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

                                <hr className="my-4 bg-warning text-warning border-2 m-auto" style={{ width: '60%', height: '2px' }} />

                                <div className="d-flex flex-column justify-content-center pb-5">
                                    <a className="text-underline text-black mb-3 text-center">Mentions légales</a>
                                    <a className="text-underline text-black text-center">Politique de confidentialité</a>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="row bg-white">
                            <div className="col p-5">
                                <p className="fw-bold ps-5">Localisation :</p>
                                <div className="ps-5">
                                    <p>123 rue de la mer</p>
                                    <p>66600, Salses-le-Château</p>
                                </div>
                                <div className="pe-5 ps-5">
                                    <p className="fw-bold">Nous contacter:</p>
                                    <div className="row">
                                        <div className="col-2 col-md-3 position-relative" style={{ height: '5vh' }}>
                                            <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_fbk.png'}
                                                fill objectFit="contain"
                                            />
                                        </div>
                                        <div className="col-2 col-md-3 position-relative" style={{ height: '5vh' }}>
                                            <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_insta.png'}
                                                fill objectFit="contain"
                                            />
                                        </div>
                                        <div className="col-2 col-md-3 position-relative" style={{ height: '5vh' }}>
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
                                <a className="text-underline text-black mb-3 ps-5">Mentions légales</a>
                                <a className="text-underline text-black ps-5">Politique de confidentialité</a>
                            </div>
                        </div>
                    )}
                </div>

            </footer>

        </>
    )

}