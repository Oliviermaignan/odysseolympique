import Link from 'next/link'

export default function HeaderBtn({ text, color, active, linkName }) {
    console.log(linkName)

    return (
        <>
            {linkName === 'connexion' ? (
                <Link href={'/' + linkName}>
                    <button
                        className={`btn ${color} text-black rounded-pill px-3 py-2 ${
                            active ? 'btn-header' : ''
                        }`}
                    >
                        {text}
                    </button>
                </Link>
            ) : (
                <Link href={'/articles/' + '/' + linkName}>
                    <button
                        className={`btn ${color} text-black rounded-pill px-3 py-2 ${
                            active ? 'btn-header' : ''
                        }`}
                    >
                        {text}
                    </button>
                </Link>
            )}
        </>
    )
}
