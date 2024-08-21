<?php

namespace App\Entity;

use App\Repository\JOUserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


#[ORM\Entity(repositoryClass: JOUserRepository::class)]
class JOUser
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['api_users_show'])]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    #[Groups(['api_users_index', 'api_user_show'])]
    private ?string $name = null;

    #[ORM\Column(length: 50)]
    #[Groups(['api_users_index', 'api_user_show'])]
    private ?string $first_name = null;

    #[ORM\Column(length: 255)]
    #[Groups(['api_user_show'])]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    #[Groups(['api_users_index', 'api_user_show'])]
    private ?string $mail = null;

    #[ORM\ManyToOne(inversedBy: 'jOUsers')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['api_users_index', 'api_user_show'])]
    private ?JORole $role = null;

    /**
     * @var Collection<int, JOComment>
     */
    #[ORM\OneToMany(targetEntity: JOComment::class, mappedBy: 'user')]
    private Collection $jOComments;

    /**
     * @var Collection<int, JOArticle>
     */
    #[ORM\OneToMany(targetEntity: JOArticle::class, mappedBy: 'user')]
    private Collection $jOArticles;

    public function __construct()
    {
        $this->jOComments = new ArrayCollection();
        $this->jOArticles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->first_name;
    }

    public function setFirstName(string $first_name): static
    {
        $this->first_name = $first_name;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getMail(): ?string
    {
        return $this->mail;
    }

    public function setMail(string $mail): static
    {
        $this->mail = $mail;

        return $this;
    }

    public function getRole(): ?JORole
    {
        return $this->role;
    }

    public function setRole(?JORole $role): static
    {
        $this->role = $role;

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
            $jOComment->setUser($this);
        }

        return $this;
    }

    public function removeJOComment(JOComment $jOComment): static
    {
        if ($this->jOComments->removeElement($jOComment)) {
            // set the owning side to null (unless already changed)
            if ($jOComment->getUser() === $this) {
                $jOComment->setUser(null);
            }
        }

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
            $jOArticle->setUser($this);
        }

        return $this;
    }

    public function removeJOArticle(JOArticle $jOArticle): static
    {
        if ($this->jOArticles->removeElement($jOArticle)) {
            // set the owning side to null (unless already changed)
            if ($jOArticle->getUser() === $this) {
                $jOArticle->setUser(null);
            }
        }

        return $this;
    }
}
