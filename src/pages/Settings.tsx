import React from 'react';
import { useAuth } from '../components/AuthProvider';
import { LogOut } from 'lucide-react';

export function Settings() {
  const { logOut } = useAuth();

  return (
    <div className="p-4 bg-slate-50 min-h-screen text-slate-900">
      <header className="h-auto md:h-20 bg-white border-b border-slate-200 px-4 md:px-8 py-4 md:py-0 flex items-center -mt-4 -mx-4 md:-mx-8 mb-8">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Settings & Backup</h1>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Manage Your Data</p>
        </div>
      </header>

      <div className="max-w-xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-6">
          <div className="flex items-center justify-between">
             <div className="flex flex-col">
               <h2 className="font-semibold text-lg text-slate-900">Account</h2>
               <p className="text-slate-500 text-sm">Sign out of the Milk Vendor Dashboard</p>
             </div>
             <button
                onClick={logOut}
                className="flex items-center gap-2 py-2 px-4 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg font-medium transition"
             >
                <LogOut className="w-5 h-5" />
                Logout
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
