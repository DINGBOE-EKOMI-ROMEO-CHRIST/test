    import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NgFor],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FAQsComponent {
  items = [
    { title: 'What skills does our group possess?', details: 'Our group comprises specialists in multiple domains like Product Design, 3D, Animation, and Development, encompassing all the proficiency required for your product.', isOpen: false },
    { title: 'How does collaboration begin after purchasing a subscription?', details: 'Our group comprises specialists in multiple domains like Product Design, 3D, Animation, and Development, encompassing all the proficiency required for your product.', isOpen: false },
    { title: 'How many designers are there?', details: 'There\'s no middle man, no extra people involved. This is just to provide you with top-notch quality and the best response rate. You\'ll work with the DesignUp founder directly. Everything will be handled by one person: UX/UI Design, Webflow Development.', isOpen: false },
    { title: 'What tools do you use for design?', details: 'All designs are created in Figma, doesn\'t matter if it\'s an icon, full page design or custom graphic.', isOpen: false },
    { title: 'What if I don\'t like the design?', details: 'Our group comprises specialists in multiple domains like Product Design, 3D, Animation, and Development, encompassing all the proficiency required for your product.', isOpen: false }
  ];

  toggleDetails(index: number): void {
    this.items[index].isOpen = !this.items[index].isOpen;
  }
}
