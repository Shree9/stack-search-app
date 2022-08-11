import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from 'src/components/about/about.component';
import { UserDetailComponent } from 'src/components/user-detail/user-detail.component';
import { UserListComponent } from 'src/components/user-list/user-list.component';

const routes : Routes = [
    {path: 'about', component: AboutComponent },
    {path: 'users', component: UserListComponent},
    {path: 'user-details', component: UserDetailComponent}
]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [ UserListComponent, UserDetailComponent]



