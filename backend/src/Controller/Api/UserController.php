<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[Route('/api/user', name: 'api_user')]
class UserController extends AbstractController
{
    #[Route('s', name: 'index')]
    public function index(UserRepository $joUserRepository): Response
    {
        $users = $joUserRepository->findAll();
        
        return $this->json(data: $users, context: ['groups'=> 'api_users_index']);
    }

    #[Route('/{id}', name: 'show')]
    public function show(User $joUser): Response
    {
        return $this->json(data: $joUser, context: ['groups' => ['api_user_show']]);
    }

    // #[Route('/{id}/edit', name: 'edit', methods: ['PUT', 'PATCH', 'GET'])]
    // public function edit(Request $request, JOUser $joUser, EntityManagerInterface $em): JsonResponse
    // {
    //     $data = json_decode($request->getContent(), true);

    //     if (!$data) {
    //         return $this->json(['message' => 'Invalid JSON data'], Response::HTTP_BAD_REQUEST);
    //     }

    //     // Mise à jour des champs
    //     if (isset($data['username'])) {
    //         $joUser->setUsername($data['username']);
    //     }
        
    //     if (isset($data['email'])) {
    //         $joUser->setEmail($data['email']);
    //     }

    //     // ... Mettre à jour d'autres champs nécessaires

    //     // Persister les modifications
    //     $em->persist($joUser);
    //     $em->flush();

    //     return $this->json(data: $joUser, context: ['groups' => 'api_user_edit']);
    // }

    // #[Route('/{id}', name: 'delete', methods: ['DELETE'])]
    // public function delete(JOUser $joUser, EntityManagerInterface $em): JsonResponse
    // {
    //     $em->remove($joUser);
    //     $em->flush();

    //     return $this->json(['message' => 'User deleted successfully'], Response::HTTP_NO_CONTENT);
    // }

}