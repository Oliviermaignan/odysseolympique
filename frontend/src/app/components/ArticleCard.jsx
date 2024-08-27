import Image from 'next/image'
import './ArticleCard.css'

export default function ArticleCard({
    urlImage,
    articleTitle,
    articleWritter,
    articleDate,
    articleContent,
    articleLikes,
}) {
    return (
        <div className="card" style={{ width: '25vw', height: '40vh' }}>
            <div className="d-flex justify-content-between">
                <p>
                    Rédacteur: <span>{articleWritter}</span>
                </p>
                <p>{articleDate}</p>
            </div>
            <h5
                className="card-title"
                style={{
                    overflow: 'hidden',
                    width: '450px',
                    whiteSpace: 'nowrap',
                }}
            >
                {articleTitle}
            </h5>
            <div className="position-relative" style={{ height: '10vh' }}>
                <Image
                    src={process.env.NEXT_PUBLIC_API_URL + urlImage}
                    alt={`image of ${articleTitle}`}
                    fill
                    objectFit="contain"
                />
            </div>
            <div className="card-body">
                <p className="card-text truncate">{articleContent}</p>
                <span>...</span>
            </div>
            <div>
                <hr
                    className="my-4 golden-color-hr text-warning border-2 m-auto"
                    style={{ width: '90%', height: '3px' }}
                />
                    <div
                        className="position-relative"
                        style={{ height: '4vh' }}
                    >
                        <Image
                            src={process.env.NEXT_PUBLIC_API_URL + '/like.png'}
                            fill
                            objectFit="contain"
                            alt="like logo"
                        />
                    <p>{articleLikes}</p>
                </div>
            </div>
        </div>
    )
}
