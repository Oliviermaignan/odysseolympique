<?php

namespace App\Entity;

use App\Repository\JOCategoryRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: JOCategoryRepository::class)]
class JOCategory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $type = null;

    /**
     * @var Collection<int, JOArticle>
     */
    #[ORM\OneToMany(targetEntity: JOArticle::class, mappedBy: 'category')]
    private Collection $jOArticles;

    public function __construct()
    {
        $this->jOArticles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): static
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection<int, JOArticle>
     */
    public function getJOArticles(): Collection
    {
        return $this->jOArticles;
    }

    public function addJOArticle(JOArticle $jOArticle): static
    {
        if (!$this->jOArticles->contains($jOArticle)) {
            $this->jOArticles->add($jOArticle);
            $jOArticle->setCategory($this);
        }

        return $this;
    }

    public function removeJOArticle(JOArticle $jOArticle): static
    {
        if ($this->jOArticles->removeElement($jOArticle)) {
            // set the owning side to null (unless already changed)
            if ($jOArticle->getCategory() === $this) {
                $jOArticle->setCategory(null);
            }
        }

        return $this;
    }
}
