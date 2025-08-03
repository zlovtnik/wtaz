/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your contact ViewModel code goes here
 */
define(['../accUtils', 'knockout', 'ojs/ojinputtext', 'oj-c/text-area', 'ojs/ojlabel', 'ojs/ojbutton', 'ojs/ojformlayout'],
 function(accUtils, ko) {
    function ContactViewModel() {
      var self = this;
      
      // Observables for form fields
      this.name = ko.observable('');
      this.email = ko.observable('');
      this.subject = ko.observable('');
      this.message = ko.observable('');
      
      // Form validation state
      this.formValid = ko.observable(false);
      
      // Success message state
      this.showSuccessMessage = ko.observable(false);
      
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Contact page loaded.');
        document.title = "ETL Expert Portfolio - Contact";
        
        // Set up event listeners
        this.setupEventListeners();
      };
      
      /**
       * Set up event listeners for the contact form
       */
      this.setupEventListeners = () => {
        // Add event listener for the send button
        const sendButton = document.getElementById('sendButton');
        if (sendButton) {
          sendButton.addEventListener('ojAction', this.handleSendMessage);
        }
        
        // Add event listeners for form fields to validate in real-time
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const subjectInput = document.getElementById('subjectInput');
        const messageTextArea = document.getElementById('messageTextArea');
        
        if (nameInput) {
          nameInput.addEventListener('valueChanged', (event) => {
            this.name(event.detail.value);
            this.validateForm();
          });
        }
        
        if (emailInput) {
          emailInput.addEventListener('valueChanged', (event) => {
            this.email(event.detail.value);
            this.validateForm();
          });
        }
        
        if (subjectInput) {
          subjectInput.addEventListener('valueChanged', (event) => {
            this.subject(event.detail.value);
            this.validateForm();
          });
        }
        
        if (messageTextArea) {
          messageTextArea.addEventListener('valueChange', (event) => {
            this.message(event.detail.value);
            this.validateForm();
          });
        }
      };
      
      /**
       * Validate the form fields
       */
      this.validateForm = () => {
        // Simple validation - check if all fields have values
        const isValid = this.name() && this.email() && this.subject() && this.message();
        
        // Additional email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(this.email());
        
        this.formValid(isValid && isEmailValid);
        
        // Update button state
        const sendButton = document.getElementById('sendButton');
        if (sendButton) {
          sendButton.disabled = !this.formValid();
        }
      };
      
      /**
       * Handle the send message button click
       */
      this.handleSendMessage = () => {
        if (!this.formValid()) {
          return;
        }
        
        // In a real application, this would send the form data to a server
        // For this demo, we'll just show a success message
        
        // Show success message
        this.showSuccessMessage(true);
        
        // Reset form after a delay
        setTimeout(() => {
          // Reset form fields
          this.name('');
          this.email('');
          this.subject('');
          this.message('');
          
          // Reset form elements
          const nameInput = document.getElementById('nameInput');
          const emailInput = document.getElementById('emailInput');
          const subjectInput = document.getElementById('subjectInput');
          const messageTextArea = document.getElementById('messageTextArea');
          
          if (nameInput) nameInput.value = '';
          if (emailInput) emailInput.value = '';
          if (subjectInput) subjectInput.value = '';
          if (messageTextArea) messageTextArea.value = '';
          
          // Hide success message after a delay
          setTimeout(() => {
            this.showSuccessMessage(false);
          }, 3000);
          
        }, 1000);
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Clean up event listeners
        const sendButton = document.getElementById('sendButton');
        if (sendButton) {
          sendButton.removeEventListener('ojAction', this.handleSendMessage);
        }
        
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const subjectInput = document.getElementById('subjectInput');
        const messageTextArea = document.getElementById('messageTextArea');
        
        if (nameInput) nameInput.removeEventListener('valueChanged', () => {});
        if (emailInput) emailInput.removeEventListener('valueChanged', () => {});
        if (subjectInput) subjectInput.removeEventListener('valueChanged', () => {});
        if (messageTextArea) messageTextArea.removeEventListener('valueChange', () => {});
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return ContactViewModel;
  }
);