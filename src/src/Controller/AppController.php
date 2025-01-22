<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class AppController extends AbstractController
{
    #[Route('/{reactRouting}', name: 'index', requirements: ['reactRouting' => '^(?!api|_wdt|_profiler).+'], defaults: ['reactRouting' => null])]
    public function index(): Response
    {
        return $this->render('App/index.html.twig');
    }
}
