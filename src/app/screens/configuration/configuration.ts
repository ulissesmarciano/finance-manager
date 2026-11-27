import { Component } from '@angular/core';
import { CustomIcon } from '../../components/shared/custom-icon/custom-icon';
import { TitlesComponent } from '../../components/shared/titles-component/titles-component';
import { PerfilItem } from './perfil-item/perfil-item';

@Component({
  imports: [CustomIcon, TitlesComponent, PerfilItem],
  selector: 'app-configuration',
  templateUrl: './configuration.html',
})
export class Configuration {}
