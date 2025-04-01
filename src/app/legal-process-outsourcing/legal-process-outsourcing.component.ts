import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-process-outsourcing',
  templateUrl: './legal-process-outsourcing.component.html',
  styleUrls: ['./legal-process-outsourcing.component.css']
})
export class LegalProcessOutsourcingComponent {

  faqs = [
    {
      question: 'What is a conveyance deed?',
      answer: 'A conveyance deed is a legal document that transfers property ownership from one person to another.',
      isOpen: false
    },
    {
      question: 'How long does it take to register a sale deed?',
      answer: 'It typically takes 7-15 days, depending on the IGR departments processing time.',
      isOpen: false
    },
    {
      question: 'Can I sell my property without registering the sale deed?',
      answer: 'No, a sale deed needs to be registered with the IGR department for the transaction to be legally binding.',
      isOpen: false
    },
    {
      question: 'What documents do I need for the IGR registration? ',
      answer: 'You’ll need proof of identity, property documents, and the signed sale/conveyance deed.',
      isOpen: false
    },
    {
      question: 'What are the costs involved in the registration? ',
      answer: 'The costs vary based on property value, location, and applicable taxes, which our Accounts team will explain during the process.',
      isOpen: false
    }
  ];

  toggleAnswer(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
