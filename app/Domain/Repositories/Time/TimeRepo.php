<?php
namespace App\Domain\Repositories\Time;

use App\Time;

class TimeRepo implements TimeRepoInterface{

    protected $model;

    public function __construct(Time $model)
    {
        $this->model = $model;
    }
    
    public function getTimes(){
        return $this->model->get();
    }
}