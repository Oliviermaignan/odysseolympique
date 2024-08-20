<?php

namespace App\Entity;

use App\Repository\JOCommentRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: JOCommentRepository::class)]
class JOComment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $date_comment = null;

    #[ORM\Column(length: 500)]
    private ?string $text = null;

    #[ORM\ManyToOne(inversedBy: 'jOComments')]
    #[ORM\JoinColumn(nullable: false)]
    private ?JOUser $user = null;

    #[ORM\ManyToOne(inversedBy: 'jOComments')]
    #[ORM\JoinColumn(nullable: false)]
    private ?JOArticle $article = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateComment(): ?\DateTimeInterface
    {
        return $this->date_comment;
    }

    public function setDateComment(\DateTimeInterface $date_comment): static
    {
        $this->date_comment = $date_comment;

        return $this;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): static
    {
        $this->text = $text;

        return $this;
    }

    public function getUser(): ?JOUser
    {
        return $this->user;
    }

    public function setUser(?JOUser $user): static
    {
        $this->user = $user;

        return $this;
    }

    public function getArticle(): ?JOArticle
    {
        return $this->article;
    }

    public function setArticle(?JOArticle $article): static
    {
        $this->article = $article;

        return $this;
    }
}
