<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Http\Attribute\IsGranted;

#[IsGranted('ROLE_ADMIN')]
#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\UniqueConstraint(name: 'UNIQ_IDENTIFIER_EMAIL', fields: ['email'])]
#[UniqueEntity(fields: ['email'], message: 'There is already an account with this email')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180)]
    private ?string $email = null;

    /**
     * @var list<string> The user roles
     */
    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\Column(length: 50)]
    private ?string $name = null;

    #[ORM\Column(length: 50)]
    private ?string $first_name = null;

    /**
     * @var Collection<int, JOArticle>
     */
    #[ORM\OneToMany(targetEntity: JOArticle::class, mappedBy: 'user')]
    private Collection $jOArticles;

    /**
     * @var Collection<int, JOComment>
     */
    #[ORM\OneToMany(targetEntity: JOComment::class, mappedBy: 'user')]
    private Collection $jOComments;

    public function __construct()
    {
        $this->jOArticles = new ArrayCollection();
        $this->jOComments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     *
     * @return list<string>
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    /**
     * @param list<string> $roles
     */
    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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
}
