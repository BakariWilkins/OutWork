import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, reorderArray } from 'ionic-angular';
import {ExercisesProvider} from "../../providers/exercises/exercises";
import {RoutinesProvider} from "../../providers/routines/routines";

/**
 * Generated class for the RoutinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-routines',
    templateUrl: 'routines.html',
})
export class RoutinesPage {

    public routines = [];
    public exercises = [];
    public reorderIsEnabled = false;

    constructor(public navCtrl: NavController, public routinesProvider: RoutinesProvider, public alertController: AlertController, public exercisesProvider: ExercisesProvider) {
        // this.routines = this.routinesProvider.getRoutines();
    }

    ionViewDidLoad() {
        console.log();
        this.routines = this.routinesProvider.getRoutines();
        console.log(this.routines);
    }

    itemReordered($event){
        reorderArray(this.routines, $event);
    }

    toggleReorder(){
        this.reorderIsEnabled = !this.reorderIsEnabled;
    }

    openRoutineAlert() {
        let addRoutineAlert = this.alertController.create();

        addRoutineAlert.setTitle('Create Routine');

        addRoutineAlert.addInput({
            type: 'text',
            name: 'routineTitle',
            value: 'routineTitle',
            placeholder: 'Routine Title'

        });

        this.exercises = this.exercisesProvider.getExercises();

        for (let i=0;i<this.exercises.length;i++){
            addRoutineAlert.addInput({
                type: 'checkbox',
                label: this.exercises[i],
                value: this.exercises[i],
            });
        }



        addRoutineAlert.addButton('Cancel');
        addRoutineAlert.addButton({
            text: 'Okay',
            handler: data => {
                console.log('Checkbox data:', data);

            }
        });
        addRoutineAlert.present();
    }
}
