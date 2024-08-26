'use client'
import './Header.css'
import HeaderBtn from './HeaderBtn'
import { usePathname } from 'next/navigation'

export default function Header() {

    const pathname = usePathname()
    console.log(pathname);
    
    
    
    return (
        <header style={{ boxShadow: '0 0 2px 5px #D3D3D3' }}>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand text-danger fw-semibold" href="#">
                    L'odyssé Olympique
                    </a>
                    <div className="navbar-nav d-flex w-75 justify-content-evenly">
                        <HeaderBtn text={'Actualités'} color={'btn-primary'} active={pathname == '/articles/news'}/>
                        <HeaderBtn text={'Epreuves'} color={'btn-dark'} />
                        <HeaderBtn text={'Conseils'} color={'btn-danger'} />
                        <HeaderBtn text={'Médailles'} color={'btn-warning'} />
                        <HeaderBtn text={'Interview'} color={'btn-success'} />
                        <div
                            class="vl"
                            style={{
                                borderRight: '1px solid grey',
                                height: '50px',
                            }}
                        ></div>
                        <HeaderBtn text={'Mon compte'} color={'btn-info'} />
                        <HeaderBtn text={'Connexion'} color={'btn-info'} />
                    </div>
                </div>
            </nav>
        </header>
    )
}
