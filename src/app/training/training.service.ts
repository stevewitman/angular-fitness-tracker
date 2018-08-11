  import { Subject } from 'rxjs/Subject';

  import { Exercise } from './exercise.model';

  export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    private availableExercises: Exercise[] = [
      { id: 'class-1', name: 'Class 1', duration: 30, calories: 8 },
      { id: 'class-2', name: 'Class 2', duration: 45, calories: 12 },
      { id: 'class-3', name: 'Class 3', duration: 60, calories: 15 },
      { id: 'class-4', name: 'Class 4', duration: 90, calories: 20 }
    ];

    private runningExercise: Exercise;

    getAvailableExercises() {
      return this.availableExercises.slice();
    }

    startExercise(selectedId: string) {
      const selectedExercise = this.availableExercises.find(ex => ex.id === selectedId);
      this.runningExercise = selectedExercise;
      this.exerciseChanged.next({ ...this.runningExercise });
    }
  }
