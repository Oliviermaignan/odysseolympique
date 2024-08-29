'use client'
import { fetchOneArticle } from '../../../utils/api'
import { useState, useEffect } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function Article(props) {
    const [article, setArticle] = useState()

    useEffect(() => {
        const getOneArticle = async () => {
            try {
                const data = await fetchOneArticle(props.params.articleId, props.params.articleCategory)
                setArticle(data)
            } catch (error) {
                throw new Error(error)
            }
        }
        getOneArticle()
    }, [])

    return (
        <>
            {article && (
                <>
                <Header categorie={article.category} />
                    <div className="article-container  m-auto pt-5 w-75">
                        <div className="d-flex text-mini justify-content-between text-gold mt-2">
                            <p>
                                Rédacteur: 
                                <span>
                                    {article.user.first_name +
                                        ' ' +
                                        article.user.name}
                                </span>
                            </p>
                            <p>{article.date_article}</p>
                        </div>

                        <h3 className='text-center'>{article.title}</h3>

                        <div
                            className="position-relative d-flex justify-content-center"
                        >
                            <img
                                src={
                                    process.env.NEXT_PUBLIC_API_URL +
                                    article.image
                                }
                                alt={`image of ${article.title}`}
                                className='article-detail-img'
                            />
                        </div>
                        <p className="px-1 px-md-2 pt-3" style={{textAlign:'justify'}}>
                           {article.description}
                           {article.description}
                           {article.description}
                           {article.description}
                           {article.description}
                        </p>

                    </div>
                    <Footer/>
                </>
            )}
        </>
    )
}
