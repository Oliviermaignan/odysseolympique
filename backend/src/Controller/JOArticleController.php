<?php

namespace App\Controller;

use App\Entity\JOArticle;
use App\Form\JOArticleType;
use App\Repository\JOArticleRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[Route('/article')]
class JOArticleController extends AbstractController
{
    #[Route('s', name: 'app_j_o_article_index', methods: ['GET'])]
    public function index(JOArticleRepository $jOArticleRepository): Response
    {
        return $this->render('jo_article/index.html.twig', [
            'j_o_articles' => $jOArticleRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_j_o_article_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $jOArticle = new JOArticle();
        $form = $this->createForm(JOArticleType::class, $jOArticle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($jOArticle);
            $entityManager->flush();

            return $this->redirectToRoute('app_j_o_article_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('jo_article/new.html.twig', [
            'j_o_article' => $jOArticle,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_j_o_article_show', methods: ['GET'])]
    public function show(JOArticle $jOArticle): Response
    {
        return $this->render('jo_article/show.html.twig', [
            'j_o_article' => $jOArticle,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_j_o_article_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, JOArticle $jOArticle, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(JOArticleType::class, $jOArticle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_j_o_article_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('jo_article/edit.html.twig', [
            'j_o_article' => $jOArticle,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_j_o_article_delete', methods: ['POST'])]
    public function delete(Request $request, JOArticle $jOArticle, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$jOArticle->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($jOArticle);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_j_o_article_index', [], Response::HTTP_SEE_OTHER);
    }
}
