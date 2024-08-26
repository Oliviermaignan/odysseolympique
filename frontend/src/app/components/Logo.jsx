import Image from "next/image";

export default function Logo() {
    return (
        <>
            <div className="position-relative" style={{ height: '45vh' }}>
                <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_jo.png'}
                    fill objectFit="contain" className="pt-2 pt-md-5" alt="logo jeux olympique"
                />
            </div>
        </>
    );
}