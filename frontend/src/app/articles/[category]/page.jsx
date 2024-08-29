'use client'
import { fetchArticlesByCategory } from '../../utils/api'
import { useEffect } from 'react'
import { useState } from 'react'
import ArticleCard from '../../components/ArticleCard'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { usePathname } from 'next/navigation'

export default function ArticlesByCategory() {
    const [articles, setArticles] = useState([])
    const [error, setError] = useState(false)
    const path = usePathname()
    const category = path.split("/")[2]

    
    useEffect(() => {
        console.log(category);
        
        const getArticles = async () => {
            try {
                const data = await fetchArticlesByCategory(category)
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
