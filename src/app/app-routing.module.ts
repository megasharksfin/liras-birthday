import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_pages/home/home.component';
import { MessageContentComponent } from './_pages/message-content/message-content.component';

const routes: Routes = [
  { path: '', redirectTo: 'emergency', pathMatch: 'full' },
  { path: 'emergency', component: HomeComponent },
  {
    path: '',
    children: [
      { path: 'message', component: MessageContentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
