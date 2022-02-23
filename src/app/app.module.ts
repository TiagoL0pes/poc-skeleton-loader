import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppComponent } from './app.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { LoadedCardComponent } from './components/loaded-card/loaded-card.component';

@NgModule({
  declarations: [AppComponent, SkeletonLoaderComponent, LoadedCardComponent],
  imports: [BrowserModule, NgxSkeletonLoaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
