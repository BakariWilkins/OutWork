import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";

// import {ExercisesProvider} from "../exercises/exercises";

/*
  Generated class for the RoutinesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoutinesProvider {

    // private exercises = [];
    private routines = [
        {
            "routineName": "Body Weight",
            "routineExercises": []
        },
        {
            "routineName": "Leg Day",
            "routineExercises": []
        },
        {
            "routineName": "Upper Body",
            "routineExercises": []
        },
        {
            "routineName": "Core",
            "routineExercises": []
        }
    ]; //    reinitialize values here with what's in storage on load

    constructor(public http: HttpClient, public storage: Storage/*, public exercisesProvider: ExercisesProvider*/) {

    }

    public getRoutines() {
        return this.routines;
    }

    public addRoutine(routine) {
        this.routines.push(routine);
        this.storage.set("routines", JSON.stringify(this.routines));
    }

    // public deleteRoutine(routine) {
    //     this.routines.pop(routine);
    //     this.storage.set("routines", JSON.stringify(this.routines));
    // }
}
