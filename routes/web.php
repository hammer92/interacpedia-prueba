<?php
Route::get("storage/{ruta}",function($pathToFile){
    if(Storage::exists("$pathToFile")){
        $file = Storage::get("{$pathToFile}");
        $mime = Storage::getMimetype("$pathToFile");
        $response = \Response::make($file, 200);
    }
    return $response;

})->where('ruta', '(.*)');


Route::get('{path}', function () {
    return view('index');
})->where('path', '(.*)');
