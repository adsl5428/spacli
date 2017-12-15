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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/todos',function (){
    return response()->json([
        ['id'=>1,'title'=>'learn vue js','completed'=>false],
        ['id'=>2,'title'=>'go to sleep','completed'=>false]
    ]);
})->middleware('api');

Route::get('/todo/1',function (){
    return response()->json([
        'id'=>1,'title'=>'learn vue js','completed'=>false
    ]);
})->middleware('api');

Route::post('/todo/create',function (Request $request){
    return response()->json([
        'id'=>3,'title'=>$request->get('title'),'completed'=>false
    ]);
})->middleware('api');
Route::patch('/todo/{id}/completed',function ($id){
    return response()->json([
        'id'=>3,'title'=>'update sucess','completed'=>false
    ]);
})->middleware('api');
Route::delete('/todo/{id}/delete',function ($id){
    return response()->json([
        'id'=>3,'title'=>'update sucess','completed'=>false
    ]);
})->middleware('api');
