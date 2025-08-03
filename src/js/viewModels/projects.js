/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your projects ViewModel code goes here
 */
define(['../accUtils', 'knockout'],
 function(accUtils, ko) {
    function ProjectsViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Projects page loaded.');
        document.title = "ETL Expert Portfolio - Projects";
        
        // Add any project-specific initialization here
        this.setupProjectInteractions();
      };
      
      /**
       * Set up any interactive elements for the projects page
       */
      this.setupProjectInteractions = () => {
        // Add hover effects or other interactions for project cards
        const projectCards = document.querySelectorAll('.project-card');
        
        if (projectCards && projectCards.length > 0) {
          projectCards.forEach(card => {
            // Add hover class for subtle animation
            card.addEventListener('mouseenter', () => {
              card.classList.add('project-card-hover');
            });
            
            card.addEventListener('mouseleave', () => {
              card.classList.remove('project-card-hover');
            });
          });
        }
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Clean up any event listeners
        const projectCards = document.querySelectorAll('.project-card');
        
        if (projectCards && projectCards.length > 0) {
          projectCards.forEach(card => {
            card.removeEventListener('mouseenter', () => {});
            card.removeEventListener('mouseleave', () => {});
          });
        }
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
    return ProjectsViewModel;
  }
);