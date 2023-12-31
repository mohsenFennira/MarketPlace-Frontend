import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, AgmMarker } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule as sellerlayout } from './seller/layout/app.layout.module';
import { AppLayoutModule as freelancerlayout } from './freelancer/layout/app.layout.module';
import { AppLayoutModule as agencylayout } from './agency/layout/app.layout.module';
import { AppLayoutModule as sellerlayoutm } from './sellerMohsen/layout/app.layout.module';

import { SellerDashComponent } from './seller/seller-dash/seller-dash.component';
import { NewProductComponent } from './seller/new-product/new-product.component';
import { RequestListComponent } from './freelancer/request-list/request-list.component';
import { PickupListComponent } from './agency/pickup-list/pickup-list.component';
import { AddPickupComponent, AddPickupComponent as addpickupseller} from './sellerMohsen/add-pickup/add-pickup.component';
import { PickupListComponent as PickupListSeller } from './sellerMohsen/pickup-list/pickup-list.component';

import {FormsModule, NgForm} from '@angular/forms';
import { StoreListComponent } from './sellerMohsen/store-list/store-list.component';
import { MatMenuModule } from '@angular/material/menu';
import { ListOfStoreComponent } from './sellerMohsen/list-of-store/list-of-store.component';
import { OrderListMComponent } from './sellerMohsen/order-list-m/order-list-m.component';
import { PickupUpdateComponent } from './sellerMohsen/pickup-update/pickup-update.component';
import { DashboardAgencyComponent } from './agency/dashboard-agency/dashboard-agency.component';
import { RequestAgencyComponent } from './agency/request-agency/request-agency.component';
import { PickupListFreelancerComponent } from './freelancer/pickup-list-freelancer/pickup-list-freelancer.component';
import { DashboardFreelancerComponent } from './freelancer/dashboard-freelancer/dashboard-freelancer.component';
import { AddBranchComponent } from './agency/add-branch/add-branch.component';
import { BranchListAgencyComponent } from './agency/branch-list-agency/branch-list-agency.component';
import { AddDeliveryMenAgencyComponent } from './agency/add-delivery-men-agency/add-delivery-men-agency.component';
import { BranchManagementComponent } from './agency/branch-management/branch-management.component';
import { DeliveryMListAgencyComponent } from './agency/delivery-mlist-agency/delivery-mlist-agency.component';
import { RequestListSellerComponent } from './sellerMohsen/request-list-seller/request-list-seller.component';
import { PikupInProgressSellerComponent } from './sellerMohsen/pikup-in-progress-seller/pikup-in-progress-seller.component';
import { TrakingPickupSellerComponent } from './sellerMohsen/traking-pickup-seller/traking-pickup-seller.component';
import { MyPickupListFreelancerComponent } from './freelancer/my-pickup-list-freelancer/my-pickup-list-freelancer.component';
import { TrakOrderByFreelancerComponent } from './freelancer/trak-order-by-freelancer/trak-order-by-freelancer.component';
import { MyPickupListAgencyComponent } from './agency/my-pickup-list-agency/my-pickup-list-agency.component';
import { TrackOrderByAgencyComponent } from './agency/track-order-by-agency/track-order-by-agency.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductListComponent } from './seller/product-list/product-list.component';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { PickListModule } from 'primeng/picklist';
import { OrderListModule } from 'primeng/orderlist';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { ChipModule } from "primeng/chip";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SliderModule } from 'primeng/slider';
import{	FileUploadModule } from 'primeng/fileupload';
import { RippleModule } from 'primeng/ripple';
import { SplitButtonModule } from 'primeng/splitbutton';
import {ToastModule} from 'primeng/toast';
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from '@angular/material/chips';
import {COMMA, SPACE} from "@angular/cdk/keycodes";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { FrontModule  } from './front/front.module';
import { NgImageSliderModule } from 'ng-image-slider';
import { UpdateProductComponent } from './seller/update-product/update-product.component';
import { SupplierRequestsListComponent } from './seller/supplier-requests-list/supplier-requests-list.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoresListComponent } from './seller/stores-list/stores-list.component';
import { CarouselModule } from 'primeng/carousel';
import { AddStoreComponent } from './seller/add-store/add-store.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { ProductSupplierListComponent } from './supplier/product-supplier-list/product-supplier-list.component';
import { StoreSupplierMapComponent } from './supplier/store-supplier-map/store-supplier-map.component';



import {JwtModule} from '@auth0/angular-jwt';

import { ToastrModule } from 'ngx-toastr';
import { CarDashboardComponent } from './freelancer/car-dashboard/car-dashboard.component';
import { AddBranchInMapComponent } from './agency/add-branch-in-map/add-branch-in-map.component';
import { AgencyMapComponent } from './agency/agency-map/agency-map.component';
import { MapDetailsAgencyComponent } from './agency/map-details-agency/map-details-agency.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MapOfPickupStoreComponent } from './agency/map-of-pickup-store/map-of-pickup-store.component';
import { PickupListGridComponent } from './agency/pickup-list-grid/pickup-list-grid.component';
import { AddAdsComponent } from './sellerMohsen/add-ads/add-ads.component';
import { MyAdsComponent } from './sellerMohsen/my-ads/my-ads.component';
import { ChartModule } from 'primeng/chart';
import { HistoryPickupsComponent } from './agency/history-pickups/history-pickups.component';
import { HistoryRequestsComponent } from './agency/history-requests/history-requests.component';
import { TableModule } from 'primeng/table';
import { BuyerOfPickupComponent } from './agency/buyer-of-pickup/buyer-of-pickup.component';
import { HistoryPickupsSellerComponent } from './sellerMohsen/history-pickups-seller/history-pickups-seller.component';
import { HistoryPickupsFreelancerComponent } from './freelancer/history-pickups-freelancer/history-pickups-freelancer.component';
import { HistoryRequestFreelancerComponent } from './freelancer/history-request-freelancer/history-request-freelancer.component';
import { ViewDeliveryMenOfPickupComponent } from './sellerMohsen/view-delivery-men-of-pickup/view-delivery-men-of-pickup.component';


@NgModule({
  declarations: [
    AppComponent,
    SellerDashComponent,
    NewProductComponent,
    RequestListComponent,
    PickupListComponent,
    StoreListComponent,
    ListOfStoreComponent,
    OrderListMComponent,
    addpickupseller,
    PickupListSeller,
    PickupUpdateComponent,
    DashboardAgencyComponent,
    RequestAgencyComponent,
    PickupListFreelancerComponent,
    DashboardFreelancerComponent,
    AddBranchComponent,
    BranchListAgencyComponent,
    AddDeliveryMenAgencyComponent,
    BranchManagementComponent,
    DeliveryMListAgencyComponent,
    RequestListSellerComponent,
    PikupInProgressSellerComponent,
    TrakingPickupSellerComponent,
    MyPickupListFreelancerComponent,
    TrakOrderByFreelancerComponent,
    MyPickupListAgencyComponent,
    TrackOrderByAgencyComponent,
    AddPickupComponent,
    ProductListComponent,
    UpdateProductComponent,
    SupplierRequestsListComponent,
    StoresListComponent,
    AddStoreComponent,
    ProductSupplierListComponent,
    StoreSupplierMapComponent,
    CarDashboardComponent,
    AddBranchInMapComponent,
    AgencyMapComponent,
    MapDetailsAgencyComponent,
    MapOfPickupStoreComponent,
    PickupListGridComponent,
    AddAdsComponent,
    MyAdsComponent,
    HistoryPickupsComponent,
    HistoryRequestsComponent,
    BuyerOfPickupComponent,
    HistoryPickupsSellerComponent,
    HistoryPickupsFreelancerComponent,
    HistoryRequestFreelancerComponent,
    ViewDeliveryMenOfPickupComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    sellerlayout,
    freelancerlayout,
    agencylayout,
    FrontModule,
    HttpClientModule,
    sellerlayoutm,
    MatMenuModule,
    NgxPaginationModule,
  	DataViewModule,
		InputTextModule,
		DropdownModule,
		ButtonModule,
    RatingModule,
    OrderListModule,
    PickListModule,
    AutoCompleteModule,
    CalendarModule,
		ChipsModule,
		DropdownModule,
		InputMaskModule,
		InputNumberModule,
		ColorPickerModule,
		CascadeSelectModule,
		MultiSelectModule,
		ToggleButtonModule,
		SliderModule,
		InputTextareaModule,
		RadioButtonModule,
		InputTextModule,
		RatingModule,
		ChipModule,
		KnobModule,
		InputSwitchModule,
		ListboxModule,
		SelectButtonModule,
		CheckboxModule,
		ButtonModule,
    FileUploadModule,
    RippleModule,
    SplitButtonModule,
    ToastModule,
    TableModule,
    MatSnackBarModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    TableModule,
    ConfirmDialogModule,
    CarouselModule,
    OverlayPanelModule,
   DialogModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: ()=>{
          return localStorage.getItem('token');
        },
        allowedDomains:['localhost']
      }
      }),
    ChartModule,
    MatInputModule,
    ToastrModule,
    MatDialogModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdVAHuNwlcMICaKUcx8RNGUb5dBiMYIIo'
    })

  ],
  providers: [
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [COMMA, SPACE]
      }
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { panelClass: ['green-snackbar'] },
    },
    MatSnackBar
    ],
  bootstrap: [AppComponent]
})

export class AppModule { }

