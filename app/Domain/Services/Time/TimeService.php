<?php

namespace App\Domain\Services\Time;

use App\Domain\Repositories\Time\TimeRepoInterface;

class TimeService {
    
    protected $timeRepo;

    public function __construct(TimeRepoInterface $timeRepo)
    {
        $this->timeRepo = $timeRepo;
    }

    public function getTimes()
    {
        return $this->timeRepo->getTimes();
    }
}