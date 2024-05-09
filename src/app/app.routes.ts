import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';


export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'table',
        component: TableComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }