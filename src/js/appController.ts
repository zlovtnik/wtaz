/**
 * @license
 * Copyright (c) 2014, 2025, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your application specific code will go here
 */
define(['knockout', 'ojs/ojcontext', 'ojs/ojmodule-element-utils', 'ojs/ojresponsiveutils', 'ojs/ojresponsiveknockoututils', 'ojs/ojcorerouter', 'ojs/ojmodulerouter-adapter', 'ojs/ojknockoutrouteradapter', 'ojs/ojurlparamadapter', 'ojs/ojarraydataprovider', 'ojs/ojknockouttemplateutils', 'ojs/ojmodule-element', 'ojs/ojknockout'],
  function(ko, Context, moduleUtils, ResponsiveUtils, ResponsiveKnockoutUtils, CoreRouter, ModuleRouterAdapter, KnockoutRouterAdapter, UrlParamAdapter, ArrayDataProvider, KnockoutTemplateUtils) {

    // Define interfaces for Knockout
    interface KnockoutObservable<T> {
      (): T;
      (value: T): void;
    }
    
    // Define interface for announcement event
    interface AnnouncementEvent extends CustomEvent {
      detail: {
        message: string;
        manner: string;
      };
    }
    
    // Define interface for navigation data
    interface NavDataItem {
      path: string;
      redirect?: string;
      detail?: {
        label: string;
        iconClass: string;
      };
    }

    class ControllerViewModel {
      KnockoutTemplateUtils: typeof KnockoutTemplateUtils;
      manner: KnockoutObservable<string>;
      message: KnockoutObservable<string>;
      smScreen: KnockoutObservable<boolean>;
      moduleAdapter: any; // ModuleRouterAdapter type
      selection: any; // KnockoutRouterAdapter type
      navDataProvider: any; // ArrayDataProvider type
      appName: KnockoutObservable<string>;
      userLogin: KnockoutObservable<string>;

      constructor() {
        this.KnockoutTemplateUtils = KnockoutTemplateUtils;

        // Handle announcements sent when pages change, for Accessibility.
        this.manner = ko.observable('polite');
        this.message = ko.observable('');

        const announcementHandler = (event: Event) => {
          const announcementEvent = event as AnnouncementEvent;
          this.message(announcementEvent.detail.message);
          this.manner(announcementEvent.detail.manner);
        };

        const globalBody = document.getElementById('globalBody');
        if (globalBody) {
          globalBody.addEventListener('announce', announcementHandler, false);
        }

        // Media queries for responsive layouts
        const smQuery = ResponsiveUtils.getFrameworkQuery(ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
        this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

        const navData: NavDataItem[] = [
          { path: '', redirect: 'home' },
          { path: 'home', detail: { label: 'Home', iconClass: 'oj-ux-ico-home' } },
          { path: 'skills', detail: { label: 'ETL Skills', iconClass: 'oj-ux-ico-education' } },
          { path: 'projects', detail: { label: 'Projects', iconClass: 'oj-ux-ico-folder-open' } },
          { path: 'experience', detail: { label: 'Experience', iconClass: 'oj-ux-ico-calendar' } },
          { path: 'contact', detail: { label: 'Contact', iconClass: 'oj-ux-ico-contact' } }
        ];
        
        // Router setup
        const router = new CoreRouter(navData, {
          urlAdapter: new UrlParamAdapter()
        });
        router.sync();

        this.moduleAdapter = new ModuleRouterAdapter(router);
        this.selection = new KnockoutRouterAdapter(router);

        // Setup the navDataProvider with the routes, excluding the first redirected route
        this.navDataProvider = new ArrayDataProvider(navData.slice(1), {keyAttributes: "path"});

        // Header
        // Application Name used in Branding Area
        this.appName = ko.observable("ETL Expert Portfolio");
        // User Info used in Global Navigation area
        this.userLogin = ko.observable("ETL Professional");
      }
    }

    // release the application bootstrap busy state
    Context.getPageContext().getBusyContext().applicationBootstrapComplete();

    return new ControllerViewModel();
  }
);