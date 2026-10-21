import type { Meta, StoryObj } from '@storybook/html-vite';
import template from '../../html/modules/message-banner.hbs';

export type MessageBannerProps = {
  navigationTitle?: string;
  hideFromNavigation?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  imageFit?: 'cover' | 'fit';
  badgeText?: string;
  heading: string;
  description?: string;
  primaryCtaHref?: string;
  analyticsPrimaryCtaLabel?: string;
  primaryCtaLabel?: string;
  primaryCtaVariant?: string;
  primaryCtaIconRight?: string;
  primaryCtaIconHover?: string;
  secondaryCtaHref?: string;
  analyticsSecondaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  secondaryCtaVariant?: string;
  secondaryCtaIconRight?: string;
  secondaryCtaIconHover?: string;
};

const meta: Meta<MessageBannerProps> = {
  title: 'Modules/Message Banner',
  tags: ['autodocs'],
  render: template,
  parameters: {
    docs: {
      description: {
        component:
          'Promotional announcement card with an optional image, an optional date-range badge, a required heading, an optional supporting description, and up to two optional CTA Buttons. When exactly one CTA is authored the whole card becomes clickable and hoverable to that CTA’s destination via a stretched-link overlay; with zero or two CTAs the card itself is not a click target.'
      }
    }
  },
  decorators: [
    (Story, context) =>
      `<div data-theme="${context.globals.theme ?? 'light'}" class="bg-[var(--color-page-base)] p-8">${Story()}</div>`
  ],
  argTypes: {
    navigationTitle: { control: 'text' },
    hideFromNavigation: { control: 'boolean' },
    imageUrl: { control: 'text' },
    imageAlt: { control: 'text' },
    imageFit: {
      control: 'select',
      options: ['cover', 'fit'],
      description: 'Cover crops to fill the media area; Fit shows the full image (e.g. logos).'
    },
    badgeText: { control: 'text' },
    heading: { control: 'text' },
    description: { control: 'text' },
    primaryCtaHref: { control: 'text' },
    analyticsPrimaryCtaLabel: { control: 'text' },
    primaryCtaLabel: { control: 'text' },
    primaryCtaVariant: { control: 'text' },
    primaryCtaIconRight: { control: 'text' },
    primaryCtaIconHover: { control: 'text' },
    secondaryCtaHref: { control: 'text' },
    analyticsSecondaryCtaLabel: { control: 'text' },
    secondaryCtaLabel: { control: 'text' },
    secondaryCtaVariant: { control: 'text' },
    secondaryCtaIconRight: { control: 'text' },
    secondaryCtaIconHover: { control: 'text' }
  }
};

export default meta;
type Story = StoryObj<MessageBannerProps>;

const sampleImage =
  'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=480&h=336&q=80';

export const TwoCtas: Story = {
  name: 'Two CTAs (default)',
  args: {
    imageUrl: sampleImage,
    imageAlt: 'Attendees networking at a climate conference venue',
    badgeText: 'NOV 9 — NOV 20, 2026',
    heading: 'Join us at COP31 the UN Climate Action Conference',
    primaryCtaHref: '#primary',
    analyticsPrimaryCtaLabel: 'Meet us at COP31',
    primaryCtaLabel: 'Meet us at COP31',
    primaryCtaVariant: 'primary-black',
    primaryCtaIconRight: 'chevrons-right',
    primaryCtaIconHover: 'arrow-right',
    secondaryCtaHref: '#secondary',
    analyticsSecondaryCtaLabel: 'Label',
    secondaryCtaLabel: 'Label',
    secondaryCtaVariant: 'tertiary-text',
    secondaryCtaIconRight: 'chevrons-right',
    secondaryCtaIconHover: 'arrow-right'
  }
};

export const WithDescription: Story = {
  name: 'With supporting description',
  args: {
    ...TwoCtas.args,
    description:
      'Discover the latest infrastructure innovations, product announcements, and event highlights.'
  }
};

export const SinglePrimaryCta: Story = {
  name: 'One CTA — whole card clickable',
  args: {
    ...TwoCtas.args,
    secondaryCtaHref: undefined,
    analyticsSecondaryCtaLabel: undefined,
    secondaryCtaLabel: undefined
  }
};

export const SingleSecondaryCta: Story = {
  name: 'One CTA (secondary only) — whole card clickable',
  args: {
    ...TwoCtas.args,
    primaryCtaHref: undefined,
    analyticsPrimaryCtaLabel: undefined,
    primaryCtaLabel: undefined
  }
};

export const NoCtas: Story = {
  name: 'No CTAs — non-interactive',
  args: {
    ...TwoCtas.args,
    primaryCtaHref: undefined,
    analyticsPrimaryCtaLabel: undefined,
    primaryCtaLabel: undefined,
    secondaryCtaHref: undefined,
    analyticsSecondaryCtaLabel: undefined,
    secondaryCtaLabel: undefined
  }
};

export const NoImage: Story = {
  name: 'No image',
  args: {
    ...TwoCtas.args,
    imageUrl: undefined,
    imageAlt: undefined
  }
};

export const NoBadge: Story = {
  name: 'No badge',
  args: {
    ...TwoCtas.args,
    badgeText: undefined
  }
};

export const ImageFit: Story = {
  name: 'Image fit (logo)',
  args: {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png',
    imageAlt: 'Partner logo',
    imageFit: 'fit',
    heading: 'Learn more about the partner',
    primaryCtaHref: '#website',
    analyticsPrimaryCtaLabel: 'Go to website',
    primaryCtaLabel: 'Go to website',
    primaryCtaVariant: 'secondary-outline',
    primaryCtaIconRight: 'chevrons-right',
    primaryCtaIconHover: 'arrow-right'
  }
};

export const MinimalHeadingOnly: Story = {
  name: 'Heading only',
  args: {
    heading: 'Join us at COP31 the UN Climate Action Conference'
  }
};
