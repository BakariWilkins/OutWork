import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, reorderArray } from 'ionic-angular';
import { ExercisesProvider } from "../../providers/exercises/exercises";

/**
 * Generated class for the ExercisesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercises',
  templateUrl: 'exercises.html',
})
export class ExercisesPage {

  public exercises = [];

  public reorderIsEnabled = false;

  constructor(/*public navCtrl: NavController,*/ public exercisesProvider: ExercisesProvider, public alertController: AlertController) {
      this.exercises = this.exercisesProvider.getExercises();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisesPage');
      this.exerciseProvider.getExercises();
  }

  itemReordered($event){
      reorderArray(this.exercises, $event);
  }

  toggleReorder(){
      this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  openExerciseAlert() {
      let addExerciseAlert = this.alertController.create({
          title: "Add an Exercise",
          message: "Enter your exercise",
          inputs: [
              {
                  type: "text",
                  name: "addExerciseInput"
              }
          ],
          buttons: [
              {
                  text: "Cancel"
              },
              {
                  text: "Add Exercise",
                  handler: inputData => {
                      let exerciseText = inputData.addExerciseInput;
                      // this.exercises.push( exerciseText );

                      this.exerciseProvider.addExercises(exerciseText);
                  }
              }
          ]
      });
      addExerciseAlert.present();
  }

}
