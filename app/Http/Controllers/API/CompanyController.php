<?php

namespace App\Http\Controllers\API;

use App\Company;
use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Company::paginate(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Company
     */
    public function store(CompanyRequest $request)
    {
        dd($request->file('file')->isValid());
        $logo = $request->file('file')->store('company', 'public');
        $request->merge(['logo' => $logo]);
        $model = new Company($request->all());
        $model->save();
        return $model;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function select()
    {
        return Company::select('id','name')->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CompanyRequest $request
     * @param Company $company
     * @return Company
     */
    public function update(Request $request, Company $company)
    {
        dd($request->file);
        if ($request->hasFile('photo')) {
        }
        $company->name = $request->name;
        $company->email = $request->email;
        $company->website = $request->website;
        $company->save();
        return $company;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Company $company
     * @return bool|null
     * @throws \Exception
     */
    public function destroy(Company $company)
    {
        Storage::disk('public')->delete($company->logo);
        return response()->json($company->delete());
    }
}
