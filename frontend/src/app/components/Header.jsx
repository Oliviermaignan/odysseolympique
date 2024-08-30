'use client'
import './Header.css'
import HeaderBtn from './HeaderBtn'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header({ categorie }) {
    const path = usePathname()
    const category = path.split('/')[2]

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
                    <Link
                        className="text-gold text-center fw-semibold py-3 fs-4"
                        href="/"
                        style={{textDecoration:'unset'}}
                    >
                        <p >L'odyssé Olympique</p>
                    </Link>
                </header>
            ) : (
                <header style={{ boxShadow: '0 0 2px 5px #D3D3D3' }}>
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link
                                className="navbar-brand text-danger fw-semibold"
                                href="/"
                            >
                                L'odyssé Olympique
                            </Link>
                            <div className="navbar-nav d-flex w-75 justify-content-evenly">
                                <HeaderBtn
                                    text={'Actualités'}
                                    color={'btn-primary'}
                                    active={category == 'actualites'}
                                    linkName={'actualites'}
                                />
                                <HeaderBtn
                                    text={'Epreuves'}
                                    color={'btn-dark'}
                                    active={category == 'epreuves'}
                                    linkName={'epreuves'}
                                />
                                <HeaderBtn
                                    text={'Conseils'}
                                    color={'btn-danger'}
                                    active={category == 'conseils'}
                                    linkName={'conseils'}
                                />
                                <HeaderBtn
                                    text={'Médailles'}
                                    color={'btn-warning'}
                                    active={category == 'medailles'}
                                    linkName={'medailles'}
                                />
                                <HeaderBtn
                                    text={'Interviews'}
                                    color={'btn-success'}
                                    active={category == 'interview'}
                                    linkName={'interview'}
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
                                    linkName={'connexion'}
                                />
                            </div>
                        </div>
                    </nav>
                </header>
            )}
        </>
    )
}
