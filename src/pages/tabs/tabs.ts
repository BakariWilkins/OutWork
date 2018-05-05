import {Component} from '@angular/core';

import {ExercisesPage} from '../exercises/exercises';
import {RoutinesPage} from '../routines/routines';
import {WorkoutPage} from '../workout/workout';
// import {DataPage} from '../data/data';



@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = ExercisesPage;
    tab2Root = RoutinesPage;
    // tab3Root = DataPage;
    tab3Root = WorkoutPage;

    constructor() {

    }
}
