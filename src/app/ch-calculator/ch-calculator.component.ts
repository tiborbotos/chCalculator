import {Component} from '@angular/core';

interface MealType {
  value: number;
  viewValue: string;
  doubleCh: boolean;
  slowCh: number;
  quickCh: number;
  hint?: string;
}

@Component({
  selector: 'app-ch-calculator',
  templateUrl: './ch-calculator.component.html',
  styleUrls: ['./ch-calculator.component.css']
})
export class ChCalculatorComponent {
  meals: Array<MealType> = [
    {value: 0, viewValue: 'Reggeli (7-8:00)', doubleCh: false, slowCh: 30, quickCh: 0},
    {value: 1, viewValue: 'Tízórai (10:00)', doubleCh: true, slowCh: 10, quickCh: 10},
    {value: 2, viewValue: 'Ebéd (13:00)', doubleCh: true, slowCh: 30, quickCh: 20, hint: '- max 20g gyorsan felszívódó'},
    {
      value: 3, viewValue: 'Uzsonna (16:00)', doubleCh: true, slowCh: 10, quickCh: 10,
      hint: '- 20g gyorsan VAGY 10g lassú és 10g gyorsan felszívódó'
    },
    {value: 4, viewValue: 'Vacsora (19:00)', doubleCh: true, slowCh: 30, quickCh: 10, hint: '- max 10 g gyorsan felszívódó'},
    {value: 5, viewValue: 'Pótvacsora (22:00)', doubleCh: true, slowCh: 0, quickCh: 0}
  ];
  mealType: number = null;
  goalQuickCh = '';
  goalSlowCh = '';
  quickChPer100 = '';
  slowChPer100 = '';

  get selectedMeal() {
    return this.meals.find((meal) => meal.value === this.mealType);
  }

  get doubleCh() {
    return this.selectedMeal && this.selectedMeal.doubleCh;
  }

  get sumCh() {
    return this.selectedMeal ? this.selectedMeal.slowCh + this.selectedMeal.quickCh : '';
  }

  get resultSlowCh() {
    const goalSlowCh = parseFloat(this.goalSlowCh),
      slowChPer100 = parseFloat(this.slowChPer100);
    return (slowChPer100 && goalSlowCh) ? Math.round((goalSlowCh * 100) / slowChPer100) + 'g' : '';
  }

  get resultQuickCh() {
    const goalQuickCh = parseFloat(this.goalQuickCh),
      quickChPer100 = parseFloat(this.quickChPer100);
    return (quickChPer100 && goalQuickCh) ? Math.round((goalQuickCh * 100) / quickChPer100) + 'g' : '';
  }

  onSelect(value) {
    if (this.selectedMeal) {
      this.goalSlowCh = this.selectedMeal.slowCh + '';
      this.goalQuickCh = this.selectedMeal.quickCh + '';
    }
  }
}
