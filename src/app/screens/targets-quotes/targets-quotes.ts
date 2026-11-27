import { Component } from '@angular/core';
import { CardComponent } from '../../components/shared/card-component/card-component';
import { TitlesComponent } from '../../components/shared/titles-component/titles-component';

@Component({
  imports: [CardComponent, TitlesComponent],
  selector: 'app-targets-quotes',
  templateUrl: './targets-quotes.html',
})
export class TargetsQuotes {}
