<?php
namespace App\Domain\Repositories\Day;

use App\Day;

class DayRepo implements DayRepoInterface{

    protected $model;

    public function __construct(Day $model)
    {
        $this->model = $model;
    }
    
    public function getDays()
    {
        return $this->model->get();
    }
}