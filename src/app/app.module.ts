import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {ExercisesPage} from '../pages/exercises/exercises';
import {RoutinesPage} from '../pages/routines/routines';
import {WorkoutPage} from '../pages/workout/workout';

// import {DataPage} from '../pages/data/data';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import {HttpClientModule} from "@angular/common/http";
import { ExercisesProvider } from '../providers/exercises/exercises';
import { RoutinesProvider } from '../providers/routines/routines';

@NgModule({
    declarations: [
        MyApp,
        ExercisesPage,
        RoutinesPage,
        WorkoutPage,
        // DataPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        HttpClientModule

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        ExercisesPage,
        RoutinesPage,
        WorkoutPage,
        // DataPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ExercisesProvider,
        RoutinesProvider
    ]
})
export class AppModule {
}
