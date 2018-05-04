import {Storage} from "@ionic/storage";

/*
  Generated class for the RoutinesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoutinesProvider {

    private routines = [
        "Push Ups",
        "Sit Ups",
        "1-mile Run",
        "Planks",
        "Bench Press",
        "Bicep Curls",
        "Pull Ups",
        "Squats"
        //    reinitialize values here with what's in storage on load
    ];

    constructor(public http: HttpClient, public storage: Storage) {

    }

    public getRoutines() {
        return this.routines;
    }

    public addRoutine(routine) {
        this.routines.push(routine);
        this.storage.set("routines", JSON.stringify(this.routines));
    }

    public deleteRoutine(routine) {
        this.routines.pop(routine);
        this.storage.set("routines", JSON.stringify(this.routines));
    }
}
