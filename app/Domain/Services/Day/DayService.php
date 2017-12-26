<?php

namespace App\Domain\Services\Day;

use App\Domain\Repositories\Day\DayRepoInterface;

class DayService {
    
    protected $dayRepo;

    public function __construct(DayRepoInterface $dayRepo)
    {
        $this->dayRepo = $dayRepo;
    }

    public function getDays()
    {
        return $this->dayRepo->getDays();
    }
}