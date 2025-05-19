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
    FrameworkName: Schema.Attribute.String;
  };
}

export interface HeadersHeaders extends Struct.ComponentSchema {
  collectionName: 'components_headers_headers';
  info: {
    description: '';
    displayName: 'headers';
    icon: 'apps';
  };
  attributes: {
    routes: Schema.Attribute.String;
    Subtype: Schema.Attribute.Component<'subtype.subtype', true>;
    title: Schema.Attribute.String;
  };
}

export interface SubtypeSubtype extends Struct.ComponentSchema {
  collectionName: 'components_subtype_subtypes';
  info: {
    displayName: 'Subtype';
  };
  attributes: {
    route: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WebSiteKeysWebSiteKey extends Struct.ComponentSchema {
  collectionName: 'components_web_site_keys_web_site_keys';
  info: {
    description: '';
    displayName: 'webSiteKey';
    icon: 'bulletList';
  };
  attributes: {
    webSiteKeys: Schema.Attribute.Enumeration<
      [
        ' compliancefoundry',
        '    rapidsoc2.com',
        '    fixplanai',
        '    happyHippa',
        '    comperiscybersecurity',
      ]
    >;
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
      'headers.headers': HeadersHeaders;
      'subtype.subtype': SubtypeSubtype;
      'web-site-keys.web-site-key': WebSiteKeysWebSiteKey;
      'websites.websites': WebsitesWebsites;
    }
  }
}
