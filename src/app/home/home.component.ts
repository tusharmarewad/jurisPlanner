import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../api-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  sidebarActive = false;
  currentLogo: string = '../assets/logo.svg'; // Default logo
  activeSection: string = 'introduction'; // Default active section


  contactForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private contactService: ContactService,private renderer: Renderer2,private el: ElementRef,
    private router: Router,private cdRef: ChangeDetectorRef
  ) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      location: ['', Validators.required],
      pincode: [''],
      message: [''],
      subject: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.showDisclaimerPopup();
  }

  showDisclaimerPopup(): void {
    // Get the main container and apply blur
    const mainContainer = this.el.nativeElement.querySelector('.main-container');
    this.renderer.addClass(mainContainer, 'blurred');

    Swal.fire({
      title: '<h3 style="color:#021D78; font-weight:700;">Disclaimer</h3>',
      html: `
        <div style="text-align: left; font-size: 16px; color: #333; line-height: 1.6;">
          <p><strong>In compliance with the Bar Council of India’s regulations</strong>, no advertisement or solicitation by advocates is permitted.</p>
          <p>By accessing this website, <strong style="color: #021D78;">www.jurisplanner.com</strong>, you acknowledge that you are seeking information from Juris Planner voluntarily and without solicitation.</p>
          <p style="font-style: italic;">The content on this website is for informational purposes only and does not constitute legal advice. Juris Planner assumes no liability for actions taken based on the information provided.</p>
          <p><strong>All content is the intellectual property of Juris Planner.</strong></p>
        </div>
      `,
      iconHtml: '<img src="../assets/JP_LOGO_WHITE.png" style="width: 80px; height: auto;">',
      showCloseButton: true, // Show the close button
      showCancelButton: false,
      confirmButtonText: '<strong>Proceed</strong>',
      confirmButtonColor: '#021D78',
      allowOutsideClick: false,
      allowEscapeKey: false,
      customClass: {
        popup: 'custom-swal-popup',
        confirmButton: 'custom-swal-button',
        closeButton: 'custom-close-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove blur effect when user clicks "Proceed"
        this.renderer.removeClass(mainContainer, 'blurred');
      }
    });

    // Handle close button click: Exit the website
    Swal.getCloseButton()?.addEventListener('click', () => {
      window.location.href = 'about:blank'; // Exit the site
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      Swal.fire('Error', 'Please fill all required fields', 'error');
      return;
    }

    this.contactService.sendContactForm(this.contactForm.value).subscribe(
      (response) => {
        Swal.fire('Success', 'Your message has been sent!', 'success');
        this.contactForm.reset();
        this.submitted = false;
      },
      (error) => {
        Swal.fire('Error', 'Failed to send message. Try again later.', 'error');
      }
    );
  }

  @ViewChild('ourExpertise', { static: false }) expertiseSection!: ElementRef;
  @ViewChild('introduction', { static: false }) introductionSection!: ElementRef;


  ngAfterViewInit() {

    this.adjustScale();
    window.addEventListener('resize', () => this.adjustScale());

    // Ensure "Introduction" is visible by default
    setTimeout(() => {
        if (this.introductionSection) {
            this.introductionSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100); // Small timeout to ensure DOM is ready before scrolling

    // Array of all section IDs
    const sectionIds = ['introduction', 'our-expertise', 'other-services', 'contact-us'];

    // Intersection Observer to update active section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                this.activeSection = sectionId;
                this.currentLogo = sectionId === 'our-expertise' ? '../assets/JP_LOGO_WHITE.svg' : '../assets/logo.svg';

                // Update animation classes
                if (sectionId === 'our-expertise') {
                    this.renderer.addClass(entry.target, 'animate-expertise');
                } else {
                    this.renderer.removeClass(entry.target, 'animate-expertise');
                }

                // Trigger change detection to update the active radio button
                this.renderer.setProperty(this.el.nativeElement, 'activeSection', sectionId);
            }
        });
    }, {
        threshold: 0.5 // Change when 50% of the section is visible
    });

    // Observe each section
    sectionIds.forEach((id) => {
        const sectionElement = document.getElementById(id);
        if (sectionElement) {
            observer.observe(sectionElement);
        }
    });
}


adjustScale() {
  const baseWidth = 1920;
  const baseHeight = 1080;
  const scaleW = window.innerWidth / baseWidth;
  const scaleH = window.innerHeight / baseHeight;
  const scale = Math.min(scaleW, scaleH);

  document.documentElement.style.setProperty('--scale-ratio', scale.toString());
}

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveSection(section: string) {
    this.activeSection = section;
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
}

business_agreement() {
  this.router.navigate(['/business-agreement']);

}

LPO() {
  this.router.navigate(['legal-process-outsourcing']);

}

trademark() {
  this.router.navigate(['trademarks']);

}
}
