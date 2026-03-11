import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContactInfoCard extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_info_cards';
  info: {
    displayName: 'Contact Info Card';
  };
  attributes: {
    content: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.String;
    icon_color: Schema.Attribute.Enumeration<
      ['primary', 'success', 'orange', 'warning']
    >;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ContactFormSubjectOption extends Struct.ComponentSchema {
  collectionName: 'components_contact_form_subject_options';
  info: {
    displayName: 'Form Subject Option';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_columns';
  info: {
    displayName: 'Footer Column';
  };
  attributes: {
    links: Schema.Attribute.JSON;
    order: Schema.Attribute.Integer;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_navigation_cta_buttons';
  info: {
    displayName: 'CTA Button';
  };
  attributes: {
    order: Schema.Attribute.Integer;
    style: Schema.Attribute.Enumeration<['primary', 'secondary', 'outline']>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationNavigationLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_navigation_links';
  info: {
    displayName: 'Navigation Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedFeatureItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    badge: Schema.Attribute.String;
    badge_color: Schema.Attribute.Enumeration<
      ['primary', 'success', 'orange', 'warning']
    >;
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    meta_description: Schema.Attribute.String;
    meta_title: Schema.Attribute.String;
    og_image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contact-info-card': ContactContactInfoCard;
      'contact.form-subject-option': ContactFormSubjectOption;
      'footer.footer-column': FooterFooterColumn;
      'navigation.cta-button': NavigationCtaButton;
      'navigation.navigation-link': NavigationNavigationLink;
      'shared.feature-items': SharedFeatureItems;
      'shared.seo': SharedSeo;
    }
  }
}
