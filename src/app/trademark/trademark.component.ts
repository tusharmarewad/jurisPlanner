import { Component } from '@angular/core';

@Component({
  selector: 'app-trademark',
  templateUrl: './trademark.component.html',
  styleUrls: ['./trademark.component.css']
})
export class TrademarkComponent {
  activeStep: string = 'registration'; // default visible step
  faqs = [
    {
      question: 'What is a trademark?',
      answer: 'A trademark is a symbol, word, or combination that distinguishes your products or services.',
      isOpen: false
    },
    {
      question: 'How long does a trademark last?',
      answer: 'Typically, 10 years. Renewal is required to maintain protection.',
      isOpen: false
    },
    {
      question: 'Why renew my trademark?',
      answer: 'Yes, trademarks can be transferred through legal documentation.',
      isOpen: false
    },
    {
      question: 'How long does the registration process take?',
      answer: 'Usually 6-12 months, depending on complexity.',
      isOpen: false
    }
  ];

  toggleAnswer(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
