
define(['../accUtils'],
 function(accUtils) {
    class AboutViewModel {

      connected = (): void => {
        accUtils.announce('About page loaded.');
        document.title = "RCLabs - About";
        // Implement further logic if needed
      };

      disconnected = (): void => {
        // Implement if needed
      };

      transitionCompleted = (): void => {
        // Implement if needed
      };
    }

    return AboutViewModel;
  }
);