'use client'
import { fetchArticles } from '../utils/api'
import { useEffect } from 'react'
import { useState } from 'react'
import ArticleCard from '../components/ArticleCard'

export default function Articles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            try {
                const data = await fetchArticles()
                setArticles(data)
            } catch (error) {
                throw new Error((message = error))
            }
        }
        getArticles()
    }, [])

    return (
        <div>
            <h1>Articles</h1>
            <div className='d-flex flex-wrap'>
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
                    />
                ))}
            </div>
        </div>
    )
}
