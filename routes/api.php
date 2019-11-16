<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::prefix('companies')->namespace('API')->group(function () {
        Route::get('/', 'CompanyController@index');
        Route::get('/select', 'CompanyController@select');
        Route::post('/', 'CompanyController@store');
        Route::post('{company}', 'CompanyController@update');
        Route::delete('{company}', 'CompanyController@destroy');
    });

    Route::prefix('employees')->namespace('API')->group(function () {
        Route::get('/', 'EmployeeController@index');
        Route::post('/', 'EmployeeController@store');
        Route::put('{company}', 'EmployeeController@update');
        Route::delete('{company}', 'EmployeeController@destroy');
    });

    Route::patch('settings/profile', 'Settings\ProfileController@update');
    Route::patch('settings/password', 'Settings\PasswordController@update');
});

Route::group(['middleware' => 'guest:api','namespace'=>'Auth'], function () {
    Route::post('login', 'LoginController@login');

    Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'ResetPasswordController@reset');

    Route::post('email/verify/{user}', 'VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'VerificationController@resend');
});
