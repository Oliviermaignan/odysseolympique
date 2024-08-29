import Image from 'next/image'
import Link from 'next/link'
import './ArticleCard.css'

export default function ArticleCard({
    urlImage,
    articleTitle,
    articleWritter,
    articleDate,
    articleContent,
    articleLikes,
    articleId,
    articleCategory
}) {
    return (
        <div className="card px-2 m-4" style={{width:'380px'}}>
            <div className="d-flex text-mini justify-content-between text-gold mt-2">
                <p>
                    Rédacteur: <span>{articleWritter}</span>
                </p>
                <p>{articleDate}</p>
            </div>
            <p
                className="card-title"
                style={{
                    overflow: 'hidden',
                    width: '100%',
                    whiteSpace: 'nowrap',
                }}
            >
                {articleTitle}
            </p>
            <div className="position-relative d-flex m-auto w-75" style={{ height: '14vh'}}>
                <Link href={'/articles/'+ '/' + articleCategory + '/' + articleId}>
                <Image
                    src={process.env.NEXT_PUBLIC_API_URL + urlImage}
                    alt={`image of ${articleTitle}`}
                    fill
                    objectFit="cover"
                    style={{borderRadius:'15px'}}
                />
                </Link>
            </div>
            <div className="px-3 pt-3">
                <p className="card-text truncate" style={{marginBottom:'0'}}>{articleContent}</p>
                <span>...</span>
            </div>
            <div>
                <hr
                    className="pb-2 golden-color-hr text-warning border-2 m-auto"
                    style={{ width: '90%', height: '3px' }}
                />
                <div className='d-flex justify-content-between align-items-center mb-2 mx-2'>
                    <div
                        className="position-relative"
                        style={{ height: '4vh', width: '4vw' }}
                        >
                        <Image
                            src={process.env.NEXT_PUBLIC_API_URL + '/like.png'}
                            fill
                            objectFit="contain"
                            alt="like logo"
                            />
                    </div>
                    <p style={{marginBottom:'0', left:'25%'}} className='position-absolute text-gold fw-semibold'>{articleLikes}</p>
                    <div
                        className="position-relative"
                        style={{ height: '4vh', width: '4vw' }}
                    >
                        <Image
                            src={
                                process.env.NEXT_PUBLIC_API_URL +
                                '/commentaire.png'
                            }
                            fill
                            objectFit="contain"
                            alt="comment logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
