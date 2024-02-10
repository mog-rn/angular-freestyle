import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nextSteps = [
    {
      heading: 'Heloo ',
      description: 'Darkness my old friend. Darkness my old friend.Darkness my old friend.Darkness my old friend.Darkness my old friend.Darkness my old friend.Darkness my old friend.Darkness my old friend.',
      title: 'Step 1',
    },
    {
      heading: 'Heloo ',
      description: 'Darkness my old friend',
      title: 'Step 2',
    },
    {
      heading: 'Heloo ',
      description: 'Darkness my old friend',
      title: 'Step 3',
    },{
      heading: 'Heloo ',
      description: 'Darkness my old friend',
      title: 'Step 3',
    },{
      heading: 'Heloo ',
      description: 'Darkness my old friend',
      title: 'Step 3',
    },{
      heading: 'Heloo ',
      description: 'Darkness my old friend',
      title: 'Step 3',
    },
    // {heading: 'Heloo ', description: 'Darkness my old friend'}
    ];
}
