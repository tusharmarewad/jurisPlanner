import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // ✅ Import ReactiveFormsModule
import { HttpClientModule } from '@angular/common/http'; // ✅ Import HttpClientModule for API requests
import { ContactService } from './api-service.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BusinessAgreementComponent } from './business-agreement/business-agreement.component';
import { TrademarkComponent } from './trademark/trademark.component';
import { LegalProcessOutsourcingComponent } from './legal-process-outsourcing/legal-process-outsourcing.component';
import { HomeComponent } from './home/home.component';
// import { BuilderAdminDashboardComponent } from './builder-admin-dashboard/builder-admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusinessAgreementComponent,
    TrademarkComponent,
    LegalProcessOutsourcingComponent,
    HomeComponent
    // BuilderAdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    HttpClientModule, 
    AppRoutingModule  
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
