import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";

/*
  Generated class for the ExercisesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExercisesProvider {

    private exercisesObjArr = [
        {
            "exerciseName": "Push Ups",
            "exerciseAttributes": { /* these will be used to determine the way the exercise is logged */
                 // If the exercise can be measured by the amount of x, then "x": true
                "weight": false,  /* if exercise uses body weight, it's false */
                "reps": true,
                "time": true,
                "distance": false
            }
        },
        {
            "exerciseName": "Sit Ups",
            "exerciseAttributes": {
                "weight": false,
                "reps": true,
                "time": true,
                "distance": false
            }
        },
        {
            "exerciseName": "Run",
            "exerciseAttributes": {
                "weight": false,
                "reps": false,
                "time": true,
                "distance": true
            }
        },
        {
            "exerciseName": "Planks",
            "exerciseAttributes": {
                "weight": false,
                "reps": false,
                "time": true,
                "distance": false
            }
        },
        {
            "exerciseName": "Bench Press",
            "exerciseAttributes": {
                "weight": true,
                "reps": true,
                "time": true,
                "distance": false
            }
        },
        {
            "exerciseName": "Squats",
            "exerciseAttributes": {
                "weight": true,
                "reps": true,
                "time": true,
                "distance": false
            }
        }


    ];

    private exercises = [
        "Push Ups",
        "Sit Ups",
        "Run",
        "Planks",
        "Bench Press",
        "Squats"
        //    reinitialize values here with what's in storage on load
    ];

    constructor(public http: HttpClient, public storage: Storage) {

    }

    public getExercises() {
        return this.exercises;
    }

    public getExercisesObjArr() {
        return this.exercisesObjArr;
    }

    public addExercise(exercise) {
        this.exercises.push(exercise);
        this.storage.set("exercises", this.exercises);
    }

    // public deleteExercise(exercise) {
    //     this.exercises.pop(exercise);
    //     this.storage.set("exercises", JSON.stringify(this.exercises));
    // }
}
