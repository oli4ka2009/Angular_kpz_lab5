import { RouterModule, Routes } from '@angular/router';
import { ClientsTableComponent } from './components/clients-table/clients-table.component';
import { PoliciesTableComponent } from './components/policies-table/policies-table.component';

export const routes: Routes = [
  { path: 'clients', component: ClientsTableComponent },
  { path: 'policies', component: PoliciesTableComponent },
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: '**', redirectTo: '/clients' },
];
