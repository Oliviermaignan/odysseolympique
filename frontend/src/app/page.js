import Image from "next/image";
import "./page.module.css"

export default function Home() {
    return (
        <main>
            <div className="d-flex">
                <div className="w-50 m-auto">

                    <Image src={process.env.NEXT_PUBLIC_API_URL + '/logo_jo.png'}
                        width={100} height={100}
                    />
                </div>
            </div>
            <div className="row">
                <button className="col-2 mx-4 btn btn-primary custom-btn">aaa</button>
                <button className="col-2 mx-4 btn btn-dark custom-btn">bbb</button>
                <button className="col-2 mx-4 btn btn-danger custom-btn">ccc</button>
            </div>
            <div className="row">
                <button className="col-2 mx-4 btn btn-warning">aaa</button>
                <button className="col-2 mx-4 btn btn-success">bbb</button>
            </div>
        </main>
    );
}
