import { Exercise } from './exercise.model';

export class TrainingService {
  private availableExercises: Exercise[] = [
    { id: 'class-1', name: 'Class 1', duration: 30, calories: 8 },
    { id: 'class-2', name: 'Class 2', duration: 45, calories: 12 },
    { id: 'class-3', name: 'Class 3', duration: 60, calories: 15 },
    { id: 'class-4', name: 'Class 4', duration: 90, calories: 20 }
  ];

  getAvailableExercises() {
    return this.availableExercises.slice();
  }
}
