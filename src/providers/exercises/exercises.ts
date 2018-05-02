import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ExercisesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExercisesProvider {

  private exercises = [
      "Push Ups",
      "Sit Ups",
      "1-mile Run",
      "Planks",
      "Bench Press",
      "Bicep Curls",
      "Pull Ups"
  ];

  constructor(public http: HttpClient) {

  }

  public getExercises(){
      return this.exercises;
  }

  public addExercises(exercise){
      this.exercises.push(exercise);
  }
}
