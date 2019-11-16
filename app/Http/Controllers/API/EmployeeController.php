<?php

namespace App\Http\Controllers\API;

use App\Employee;
use App\Http\Controllers\Controller;
use App\Http\Requests\EmployeeRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return Employee::with('company:id,name')->paginate(10);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param EmployeeRequest $request
     * @return Employee
     */
    public function store(EmployeeRequest $request)
    {
        $model = new Employee($request->all());
        $model->save();
        return $model;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param EmployeeRequest $request
     * @param Employee $employee
     * @return Employee
     */
    public function update(Employee $employee, EmployeeRequest $request)
    {
        $employee->first_name = $request->first_name;
        $employee->last_name = $request->last_name;
        $employee->company_id = $request->company_id;
        $employee->email = $request->email;
        $employee->phone = $request->phone;
        $employee->save();
        return $employee;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Employee $employee
     * @return Response
     * @throws \Exception
     */
    public function destroy(Employee $employee)
    {
        return response()->json($employee->delete());
    }
}
