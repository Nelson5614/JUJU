import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQSectionComponent {
  faqs = [
    {
      question: "How do I qualify for a micro-loan?",
      answer: "To qualify for a micro-loan, you need to have a valid ID, proof of business operation (even if informal), and a clear purpose for the loan. We assess applications based on your business potential rather than traditional credit scores."
    },
    {
      question: "What are your interest rates and repayment terms?",
      answer: "Our interest rates are competitive and transparent, typically ranging from 5-15% depending on the loan type and term. We offer flexible repayment schedules that can be daily, weekly, or monthly to match your business cash flow."
    },
    {
      question: "How can I build a good credit history with JUJU?",
      answer: "Start with a smaller loan and make regular repayments. We report your positive payment history to credit bureaus. Successfully completing loan cycles helps you qualify for larger amounts and better rates in the future."
    },
    {
      question: "What financial literacy support do you provide?",
      answer: "We offer free financial education workshops, one-on-one business mentoring, and digital tools to help you manage your finances. Our team provides guidance on budgeting, savings, and business growth strategies."
    },
    {
      question: "How quickly can I receive funding?",
      answer: "Most micro-loan applications are processed within 24-48 hours. Once approved, funds can be disbursed immediately to your mobile wallet or bank account. Emergency loans may be processed even faster."
    }
  ];

  activeIndex: number | null = null;

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}