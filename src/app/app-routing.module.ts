import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessAgreementComponent } from './business-agreement/business-agreement.component';
import { HomeComponent } from './home/home.component';
import { TrademarkComponent } from './trademark/trademark.component';
import { LegalProcessOutsourcingComponent } from './legal-process-outsourcing/legal-process-outsourcing.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'business-agreement', component: BusinessAgreementComponent }, 
  { path: 'trademarks', component: TrademarkComponent }, 
  { path: 'legal-process-outsourcing', component: LegalProcessOutsourcingComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
