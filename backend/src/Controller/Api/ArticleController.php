<?php

namespace App\Controller\Api;

use App\Entity\JOArticle;
use App\Repository\JOArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/article', name: 'api_article')]
class ArticleController extends AbstractController
{
    #[Route('s', name: 'index')]
    public function index(JOArticleRepository $joArticleRepository): Response
    {
        $articles = $joArticleRepository->findAll();
        
        return $this->json(data: $articles, context: ['groups'=> 'api_articles_index']);
    }

    #[Route('/{id}', name: 'show')]
    public function show(JOArticle $joArticle): Response
    {
        return $this->json(data: $joArticle, context: ['groups' => ['api_article_show']]);
    }
}
