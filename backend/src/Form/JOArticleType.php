<?php

namespace App\Form;

use App\Entity\JOArticle;
use App\Entity\JOCategory;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class JOArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('image')
            ->add('description')
            ->add('date_article', null, [
                'widget' => 'single_text',
            ])
            ->add('like_article')
            ->add('category', EntityType::class, [
                'class' => JOCategory::class,
                'choice_label' => 'type',
            ])
            ->add('user', EntityType::class, [
                'class' => User::class,
                'choice_label' => 'name',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => JOArticle::class,
        ]);
    }
}
