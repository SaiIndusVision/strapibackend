import type { Schema, Struct } from '@strapi/strapi';

export interface AccordionAccordion extends Struct.ComponentSchema {
  collectionName: 'components_accordion_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
    icon: 'arrowDown';
  };
  attributes: {
    accordionContentDescription: Schema.Attribute.Text;
    accordionId: Schema.Attribute.Integer;
    accordionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    accordionTitle: Schema.Attribute.String;
  };
}

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

export interface ClientLogoClientLogo extends Struct.ComponentSchema {
  collectionName: 'components_client_logo_client_logos';
  info: {
    displayName: 'ClientLogo';
  };
  attributes: {
    ClientLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
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

export interface ResourceCardResourceCard extends Struct.ComponentSchema {
  collectionName: 'components_resource_card_resource_cards';
  info: {
    displayName: 'resourceCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.Text;
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
        'compliancefoundry',
        'rapidsoc2.com',
        'fixplanai',
        'happyHippa',
        'comperiscybersecurity',
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
      'accordion.accordion': AccordionAccordion;
      'advisory-services.advisory-services': AdvisoryServicesAdvisoryServices;
      'client-logo.client-logo': ClientLogoClientLogo;
      'frameworks.cf-frameworks': FrameworksCfFrameworks;
      'headers.headers': HeadersHeaders;
      'resource-card.resource-card': ResourceCardResourceCard;
      'subtype.subtype': SubtypeSubtype;
      'web-site-keys.web-site-key': WebSiteKeysWebSiteKey;
      'websites.websites': WebsitesWebsites;
    }
  }
}
