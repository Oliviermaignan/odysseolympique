<?php

namespace App\Controller;

use App\Entity\JOComment;
use App\Form\JOCommentType;
use App\Repository\JOCommentRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/comment')]
class JOCommentController extends AbstractController
{
    #[Route('s', name: 'app_j_o_comment_index', methods: ['GET'])]
    public function index(JOCommentRepository $jOCommentRepository): Response
    {
        return $this->render('jo_comment/index.html.twig', [
            'j_o_comments' => $jOCommentRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_j_o_comment_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $jOComment = new JOComment();
        $form = $this->createForm(JOCommentType::class, $jOComment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($jOComment);
            $entityManager->flush();

            return $this->redirectToRoute('app_j_o_comment_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('jo_comment/new.html.twig', [
            'j_o_comment' => $jOComment,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_j_o_comment_show', methods: ['GET'])]
    public function show(JOComment $jOComment): Response
    {
        return $this->render('jo_comment/show.html.twig', [
            'j_o_comment' => $jOComment,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_j_o_comment_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, JOComment $jOComment, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(JOCommentType::class, $jOComment);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_j_o_comment_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('jo_comment/edit.html.twig', [
            'j_o_comment' => $jOComment,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_j_o_comment_delete', methods: ['POST'])]
    public function delete(Request $request, JOComment $jOComment, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$jOComment->getId(), $request->getPayload()->getString('_token'))) {
            $entityManager->remove($jOComment);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_j_o_comment_index', [], Response::HTTP_SEE_OTHER);
    }
}
