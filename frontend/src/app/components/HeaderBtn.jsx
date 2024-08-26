export default function HeaderBtn({text, color, active}) {
    return (
        <>
            <button className={`btn ${color} text-black rounded-pill px-3 py-2 ${active ? btn-header : ''}`}>
                {text}
            </button>
        </>
    )
}
