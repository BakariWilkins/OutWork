import { Component } from '@angular/core';
import { IonicPage, /*NavController,*/ AlertController, reorderArray } from 'ionic-angular';
import { RoutinesProvider } from "../../providers/routines/routines";

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

    public reorderIsEnabled = false;

    constructor(/*public navCtrl: NavController,*/ public routinesProvider: RoutinesProvider, public alertController: AlertController) {
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
        let addRoutineAlert = this.alertController.create({
            title: "Add an Routine",
            message: "Enter your routine",
            inputs: [
                {
                    type: "text",
                    name: "addRoutineInput"
                }
            ],
            buttons: [
                {
                    text: "Cancel"
                },
                {
                    text: "Add Routine",
                    handler: inputData => {
                        let routineText = inputData.addRoutineInput;
                        // this.routines.push( routineText );

                        this.routinesProvider.addRoutine(routineText);
                    }
                }
            ]
        });
        addRoutineAlert.present();
    }

}
