'use client'
import './Header.css'
import HeaderBtn from './HeaderBtn'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header({ categorie }) {
    const pathname = usePathname()

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000)
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            {isMobile ? (
                <header style={{ boxShadow: '0 0 2px 5px #D3D3D3' }}>
                    <p
                        className="text-gold text-center fw-semibold py-3 fs-4"
                        href="#"
                    >
                        L'odyssé Olympique
                    </p>
                </header>
            ) : (
                <header style={{ boxShadow: '0 0 2px 5px #D3D3D3' }}>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a
                                className="navbar-brand text-danger fw-semibold"
                                href="#"
                            >
                                L'odyssé Olympique
                            </a>
                            <div className="navbar-nav d-flex w-75 justify-content-evenly">
                                <HeaderBtn
                                    text={'Actualités'}
                                    color={'btn-primary'}
                                    active={categorie == 'actualités'}
                                />
                                <HeaderBtn
                                    text={'Epreuves'}
                                    color={'btn-dark'}
                                    active={categorie == 'épreuves'}
                                />
                                <HeaderBtn
                                    text={'Conseils'}
                                    color={'btn-danger'}
                                    active={categorie == 'conseils'}
                                />
                                <HeaderBtn
                                    text={'Médailles'}
                                    color={'btn-warning'}
                                    active={categorie == 'médailles'}
                                />
                                <HeaderBtn
                                    text={'Interview'}
                                    color={'btn-success'}
                                    active={categorie == 'interview'}
                                />
                                <div
                                    className="vl"
                                    style={{
                                        borderRight: '1px solid grey',
                                        height: '50px',
                                    }}
                                ></div>
                                <HeaderBtn
                                    text={'Mon compte'}
                                    color={'btn-info'}
                                />
                                <HeaderBtn
                                    text={'Connexion'}
                                    color={'btn-info'}
                                />
                            </div>
                        </div>
                    </nav>
                </header>
            )}
        </>
    )
}
