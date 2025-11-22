<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::where('role', 'customer')
                    ->orderBy('created_at', 'DESC')
                    ->get();

        return response()->json([
            'status' => 200,
            'data' => $users
        ], 200);
    }

}
