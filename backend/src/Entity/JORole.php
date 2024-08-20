<?php

namespace App\Entity;

use App\Repository\JORoleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: JORoleRepository::class)]
class JORole
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $type = null;

    /**
     * @var Collection<int, JOUser>
     */
    #[ORM\OneToMany(targetEntity: JOUser::class, mappedBy: 'role')]
    private Collection $jOUsers;

    public function __construct()
    {
        $this->jOUsers = new ArrayCollection();
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
     * @return Collection<int, JOUser>
     */
    public function getJOUsers(): Collection
    {
        return $this->jOUsers;
    }

    public function addJOUser(JOUser $jOUser): static
    {
        if (!$this->jOUsers->contains($jOUser)) {
            $this->jOUsers->add($jOUser);
            $jOUser->setRole($this);
        }

        return $this;
    }

    public function removeJOUser(JOUser $jOUser): static
    {
        if ($this->jOUsers->removeElement($jOUser)) {
            // set the owning side to null (unless already changed)
            if ($jOUser->getRole() === $this) {
                $jOUser->setRole(null);
            }
        }

        return $this;
    }
}
