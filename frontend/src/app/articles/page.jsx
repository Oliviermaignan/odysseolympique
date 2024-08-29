'use client'
import { fetchArticles } from '../utils/api'
import { useEffect } from 'react'
import { useState } from 'react'
import ArticleCard from '../components/ArticleCard'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Articles() {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const getArticles = async () => {
            try {
                const data = await fetchArticles()
                setArticles(data)
            } catch (error) {
                setError(true)
                throw new Error((error))
            }
        }
        getArticles()
    }, [])

    if (error){
        return <p> error </p>
    }

    return (
        <div>
            <Header />
            <h2 className="text-center my-4">Articles</h2>
            <div className="d-flex flex-wrap justify-content-center">
                {articles.map((article) => (
                    <ArticleCard
                        urlImage={article.image}
                        articleTitle={article.title}
                        articleWritter={
                            article.user.first_name + ' ' + article.user.name
                        }
                        articleDate={article.date_article}
                        articleContent={article.description}
                        articleLikes={article.like_article}
                        articleId={article.id}
                        articleCategory={article.category}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    )
}
