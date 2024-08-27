<?php

namespace App\Entity;

use App\Repository\JOArticleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: JOArticleRepository::class)]
class JOArticle
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['api_articles_index', 'api_article_show'])]
    private ?string $title = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['api_articles_index', 'api_article_show'])]
    private ?string $image = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['api_articles_index', 'api_article_show'])]
    private ?string $description = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['api_articles_index', 'api_article_show'])]
    private ?\DateTimeInterface $date_article = null;

    #[ORM\Column(nullable: true)]
    #[Groups(['api_articles_index', 'api_article_show'])]
    private ?int $like_article = null;

    /**
     * @var Collection<int, JOComment>
     */
    #[ORM\OneToMany(targetEntity: JOComment::class, mappedBy: 'article')]
    private Collection $jOComments;

    #[ORM\ManyToOne(inversedBy: 'jOArticles')]
    #[ORM\JoinColumn(nullable: false)]
    private ?JOUser $user = null;

    #[ORM\ManyToOne(inversedBy: 'jOArticles')]
    #[ORM\JoinColumn(nullable: false)]
    private ?JOCategory $category = null;

    public function __construct()
    {
        $this->jOComments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getDateArticle(): ?\DateTimeInterface
    {
        return $this->date_article;
    }

    public function setDateArticle(\DateTimeInterface $date_article): static
    {
        $this->date_article = $date_article;

        return $this;
    }

    public function getLikeArticle(): ?int
    {
        return $this->like_article;
    }

    public function setLikeArticle(?int $like_article): static
    {
        $this->like_article = $like_article;

        return $this;
    }

    /**
     * @return Collection<int, JOComment>
     */
    public function getJOComments(): Collection
    {
        return $this->jOComments;
    }

    public function addJOComment(JOComment $jOComment): static
    {
        if (!$this->jOComments->contains($jOComment)) {
            $this->jOComments->add($jOComment);
            $jOComment->setArticle($this);
        }

        return $this;
    }

    public function removeJOComment(JOComment $jOComment): static
    {
        if ($this->jOComments->removeElement($jOComment)) {
            // set the owning side to null (unless already changed)
            if ($jOComment->getArticle() === $this) {
                $jOComment->setArticle(null);
            }
        }

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

    public function getCategory(): ?JOCategory
    {
        return $this->category;
    }

    public function setCategory(?JOCategory $category): static
    {
        $this->category = $category;

        return $this;
    }
}
