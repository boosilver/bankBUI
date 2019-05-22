import { AppRoutes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, RequestOptions } from '@angular/http';
import { CommonModule, APP_BASE_HREF } from '@angular/common';

import { LoadingModule } from 'ngx-loading';
import { ModalModule } from 'ngx-bootstrap/modal';

//------- Service --------
import { PROCURETOPAYService } from './service/procuretopay.service';
import { IDFProxyService } from './service/idf.Proxy.service';
//------- End Service ----------

//------- Component --------
import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { EndorseComponent } from './endorse/endorse.component';
import { FinanceComponent } from './finance/finance.component';
import { IndexComponent } from './index/index.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { CheckpoComponent } from './checkpo/checkpo.component';
import { UserdataComponent } from './userdata/userdata.component';
import { LoanbyinvComponent } from './loanbyinv/loanbyinv.component';
import { ReqverinvComponent } from './reqverinv/reqverinv.component';
import { AcceptComponent } from './accept/accept.component';

//------- End Component ----------

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    EndorseComponent,
    FinanceComponent,
    IndexComponent,
    CheckpoComponent,
    PurchaseOrderComponent,
    UserdataComponent,
    LoanbyinvComponent,
    ReqverinvComponent,
    AcceptComponent,
   
    

  ],
  imports: [
    HttpModule, CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    LoadingModule,
    ModalModule.forRoot()

  ],
  providers: [PROCURETOPAYService, IDFProxyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
