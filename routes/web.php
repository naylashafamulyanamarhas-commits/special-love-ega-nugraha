<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ImageCropController;

Route::get('/crop', [ImageCropController::class, 'cropAll']);

Route::get('/', function () {
    return view('index');
});