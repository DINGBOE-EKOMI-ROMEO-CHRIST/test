import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface image {
  src: string;
  alt: string;
  descript: string;
}
@Component({
  selector: 'app-made-by',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './made-by.component.html',
  styleUrl: './made-by.component.css'
})
export class MadeByComponent {
  images: image[] = [

    { src: 'https://www.graphicpear.com/wp-content/uploads/2023/08/Espresso-Cups-Mockup.jpg',
      alt: 'Image 1',
      descript:'Daftpunk' 
    },
    { src: 'https://pbs.twimg.com/media/GDq8STBbUAAi65r?format=png&name=small',
      alt: 'Image 2',
      descript:'Style' 
    },
    { src: 'https://lh7-us.googleusercontent.com/0HauCg374bytWOAYPXq_LRTZkakNyOp42nGWDaH54av5RNQBanrBx_cSigUxDjIbYoPrtJaHPH5U3kc0puQHIvGrT7eYFQtWyUaDjfej_GDQphTuI4qbqddm8RXn4NlmwPYM-6d_zAcNg8bsKh6HTT8', 
      alt: 'Image 3',
      descript:'Smart' 
    },

    { src: 'https://images.frandroid.com/wp-content/uploads/2015/09/meizu-pro-5.jpg', 
      alt: 'Image 4',
      descript:'Light' 
    },

    { src: 'https://www.fael.pt/wp-content/uploads/2023/10/blade-runner-2049.png', 
      alt: 'Image 5',
      descript:'Fashion' 
    },

    { src: 'https://wepackagingboxes.com/wp-content/uploads/2022/11/Custom-Cream-Boxes-2.jpg', 
      alt: 'Image 6',
      descript:'Honey' 
    },

    { src: 'https://b2894532.smushcdn.com/2894532/wp-content/uploads/2020/03/Hero-6.jpg?lossy=1&strip=1&webp=1', 
    alt: 'Image 7',
    descript:'Description' 
    },

    { src: 'https://img.freepik.com/photos-premium/composition-fleurs-luxe-esthetique-fleur-pivoine-peche-delicate-elegante-dans-vase-verre-projetant-ombre-du-soleil-tableau-blanc_408798-10278.jpg?w=740', 
    alt: 'Image 8',
    descript:'Sky' 
    },

    { src: 'https://www.fael.pt/wp-content/uploads/2023/10/akira.png', 
    alt: 'Image 9',
    descript:'Rain' 
    }
  ];
}
