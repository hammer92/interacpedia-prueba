<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable =['name','email','website','logo'];

    function getLogoAttribute($val){
        return (is_null($val)) ? 'sin_foto.png' : $val;
    }
}
