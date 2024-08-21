<?php

namespace App\Controller\Api;

use App\Entity\JOUser;
use App\Repository\JOUserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/user', name: 'api_user')]
class UserController extends AbstractController
{
    #[Route('s', name: 'index')]
    public function index(JOUserRepository $joUserRepository): Response
    {
        $users = $joUserRepository->findAll();
        
        return $this->json(data: $users, context: ['groups'=> 'api_users_index']);
    }

    #[Route('/{name}', name: 'show')]
    public function show(JOUser $joUser): Response
    {
        return $this->json(data: $joUser, context: ['groups' => ['api_user_show']]);
    }

    // #[Route('/{name}/edit', name: 'edit')]
    // public function edit(Request $request, JOUser $joUser, EntityManagerInterface $entityManager): Response
    // {
    //     $form = $this->createForm(CategorieType::class, $categorie);
    //     $form->handleRequest($request);

    //     if ($form->isSubmitted() && $form->isValid()) {
    //         $entityManager->flush();

    //         $this->addFlash('success', "La catégorie a été mise à jour.");

    //         return $this->redirectToRoute('app_categorie_index', [], Response::HTTP_SEE_OTHER);
    //     }

    //     return $this->render('categorie/edit.html.twig', [
    //         'categorie' => $categorie,
    //         'form' => $form,
    //     ]);
    // }

}