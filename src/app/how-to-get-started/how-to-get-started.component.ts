import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Card {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  text: string;
}
interface image{
  imgsrc: string;
}
@Component({
  selector: 'app-how-to-get-started',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-get-started.component.html',
  styleUrl: './how-to-get-started.component.css'
})
export class HowToGetStartedComponent {
  
  sections: { [key: string]: boolean } = {
    section1: false,
    section2: false,
    section3: false
  };

  toggleSection(section: string): void {
    this.sections[section] = !this.sections[section];
  }

  cards: Card[] = [
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNr6R9HwyBIWnnQ41MSOqZpDDsqqQ8jkvMw&s',
      imageAlt: 'Card Image 1',
      title: 'Track your task',
      description: 'Add unlimited design requests to your board.',
      text:''
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNr6R9HwyBIWnnQ41MSOqZpDDsqqQ8jkvMw&s',
      imageAlt: 'Card Image 2',
      title: 'Custom made',
      description: 'Ensure consistent product aesthetics with every design.',
      text:''
    },
    {
      imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNNr6R9HwyBIWnnQ41MSOqZpDDsqqQ8jkvMw&s',
      imageAlt: 'Card Image 3',
      title: 'Fixed price',
      description: 'No surprises! Pay a fixed monthly price.',
      text:''
    },
    {
      imageSrc: 'https://www.fond-ecran-hd.net/Public/uploads/2021-06-07/thumbs-1/darksuncreationphotohosseinzare.jpg',
      imageAlt: 'Card Image 4',
      title: 'Get started today',
      description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
      text:''
    }
  ];
}
