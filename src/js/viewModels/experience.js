/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your experience ViewModel code goes here
 */
define(['../accUtils', 'knockout'],
 function(accUtils, ko) {
    function ExperienceViewModel() {
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
        accUtils.announce('Experience page loaded.');
        document.title = "ETL Expert Portfolio - Experience";
        
        // Add timeline styling
        this.enhanceTimeline();
      };
      
      /**
       * Enhance the timeline with visual elements
       */
      this.enhanceTimeline = () => {
        // Add connecting line to timeline items
        const timeline = document.querySelector('.experience-timeline');
        if (!timeline) return;
        
        // Add a class to the timeline for styling
        timeline.classList.add('timeline-enhanced');
        
        // Add animation to timeline items
        const timelineItems = document.querySelectorAll('.timeline-item');
        if (timelineItems && timelineItems.length > 0) {
          timelineItems.forEach((item, index) => {
            // Add a slight delay to each item for a staggered effect
            const delay = index * 150;
            setTimeout(() => {
              item.classList.add('timeline-item-visible');
            }, delay);
          });
        }
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
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
    return ExperienceViewModel;
  }
);