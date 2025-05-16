import type { Schema, Struct } from '@strapi/strapi';

export interface AdvisoryServicesAdvisoryServices
  extends Struct.ComponentSchema {
  collectionName: 'components_advisory_services_advisory_services';
  info: {
    displayName: 'AdvisoryServices';
  };
  attributes: {
    AdvServices: Schema.Attribute.String;
  };
}

export interface FrameworksCfFrameworks extends Struct.ComponentSchema {
  collectionName: 'components_frameworks_cf_frameworks';
  info: {
    description: '';
    displayName: 'CF_Frameworks';
  };
  attributes: {
    Framework: Schema.Attribute.String;
  };
}

export interface WebsitesWebsites extends Struct.ComponentSchema {
  collectionName: 'components_websites_websites';
  info: {
    displayName: 'Websites';
  };
  attributes: {
    Website: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'advisory-services.advisory-services': AdvisoryServicesAdvisoryServices;
      'frameworks.cf-frameworks': FrameworksCfFrameworks;
      'websites.websites': WebsitesWebsites;
    }
  }
}
