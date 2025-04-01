import { Component } from '@angular/core';

@Component({
  selector: 'app-business-agreement',
  templateUrl: './business-agreement.component.html',
  styleUrls: ['./business-agreement.component.css']
})
export class BusinessAgreementComponent {
  hoveredButtons: boolean[] = new Array(8).fill(false);

  onHover(index: number, isHovered: boolean) {
    this.hoveredButtons[index] = isHovered;
  }

  onMouseDown(index: number) {
    this.hoveredButtons[index] = false; // Reset to default blue on click
  }

  activeStep = 1; // Default step shown

  setStep(step: number) {
    this.activeStep = step;
  }

  faqs = [
    {
      question: 'What is a business agreement?',
      answer: 'A legally binding document outlining business relationship terms.',
      isOpen: false
    },
    {
      question: 'Why do I need a business agreement?',
      answer: 'To ensure clarity, protect your interests, and prevent disputes.',
      isOpen: false
    },
    {
      question: 'Do I need a lawyer to create a business agreement?',
      answer: 'Yes, to ensure terms are fair, clear, and enforceable.',
      isOpen: false
    },
    {
      question: 'How long does it take to draft an agreement?',
      answer: 'The time varies depending on the complexity, typically between a few days to a few weeks.',
      isOpen: false
    }
  ];

  toggleAnswer(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
