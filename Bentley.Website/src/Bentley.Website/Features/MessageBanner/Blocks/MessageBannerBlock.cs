using System.ComponentModel.DataAnnotations;
using Bentley.Website.Business.Analytics;
using Bentley.Website.Business.Groups;
using Bentley.Website.Business.Interfaces;
using Bentley.Website.Business.Tabs;
using Bentley.Website.Features.GlobalSearch.Helpers;
using Bentley.Website.Features.GlobalSearch.Interfaces;
using EPiServer.SpecializedProperties;
using EPiServer.Web;

namespace Bentley.Website.Features.MessageBanner.Blocks;

[ContentType(
    DisplayName = "Message Banner Block",
    Description = "A general-purpose promotional announcement card with an optional image, an optional date-range badge, a required heading, an optional description, and up to two optional CTA buttons.",
    GUID = "38AC61BF-7F0B-4DA8-9B05-3C8885ED8692",
    GroupName = CmsGroupNames.Blocks,
    CompositionBehaviors = [CompositionBehavior.ElementEnabledKey])]
public class MessageBannerBlock : BlockData, IGlobalSearchFullTextBlock, INavigableVisualBuilderElement
{
    [Display(
        Name = "Image",
        Description = "Optional. A single image is authored and reused across breakpoints. Use the Image style (Cover or Fit) to control cropping — Fit keeps logos fully visible.",
        GroupName = SystemTabNames.Content,
        Order = 1)]
    [UIHint(UIHint.Image)]
    public virtual ContentReference Image { get; set; }

    [Display(
        Name = "Image Alt Text",
        Description = "Accessible alt text for the image.",
        GroupName = SystemTabNames.Content,
        Order = 5)]
    [CultureSpecific]
    public virtual string ImageAltText { get; set; }

    [Display(
        Name = "Badge / Date Range",
        Description = "Optional single-line label rendered above the Heading. Recommended ≤ 30 characters.",
        GroupName = SystemTabNames.Content,
        Order = 10)]
    [CultureSpecific]
    public virtual string BadgeText { get; set; }

    [Display(
        Name = "Heading",
        Description = "Primary message text. Recommended ≤ 60 characters.",
        GroupName = SystemTabNames.Content,
        Order = 15)]
    [CultureSpecific]
    [Required]
    public virtual string Heading { get; set; }

    [Display(
        Name = "Description",
        Description = "Optional supporting text displayed below the heading and above the CTA buttons.",
        GroupName = SystemTabNames.Content,
        Order = 17)]
    [CultureSpecific]
    public virtual string? Description { get; set; }

    [Display(
        Name = "Primary CTA",
        Description = "Optional. When this is the only CTA authored, the whole card becomes clickable to its destination.",
        GroupName = SystemTabNames.Content,
        Order = 20)]
    [CultureSpecific]
    public virtual LinkItem PrimaryCta { get; set; }
    
    [Display(
        Name = "Primary CTA Analytics Text",
        Description = "Optional text to use for analytics.",
        GroupName = SystemTabNames.Content,
        Order = 21)]
    [AnalyticsTextSource(nameof(PrimaryCta))]
    public virtual string PrimaryCtaAnalyticsText { get; set; }

    [Display(
        Name = "Secondary CTA",
        Description = "Optional. Rendered after Primary when both are authored. When both are authored, neither stretches to the full card.",
        GroupName = SystemTabNames.Content,
        Order = 25)]
    [CultureSpecific]
    public virtual LinkItem SecondaryCta { get; set; }
    
    [Display(
        Name = "Secondary CTA Analytics Text",
        Description = "Optional text to use for analytics.",
        GroupName = SystemTabNames.Content,
        Order = 26)]
    [AnalyticsTextSource(nameof(SecondaryCta))]
    public virtual string SecondaryCtaAnalyticsText { get; set; }

    [Display(
        Name = "Navigation Title",
        Description = "Optional label used by On Page Navigation. Leave empty to use the element heading when available.",
        GroupName = CmsTabsNames.Navigation,
        Order = 900)]
    [CultureSpecific]
    public virtual string? NavigationTitle { get; set; }

    [Display(
        Name = "Anchor ID",
        Description = "Optional friendly anchor ID used by On Page Navigation. Use letters, numbers, hyphens, underscores, colons, or periods.",
        GroupName = CmsTabsNames.Navigation,
        Order = 910)]
    [CultureSpecific]
    public virtual string? NavigationAnchorId { get; set; }

    [Display(
        Name = "Hide from navigation",
        Description = "Exclude this element from automatically generated On Page Navigation links.",
        GroupName = CmsTabsNames.Navigation,
        Order = 920)]
    [CultureSpecific]
    public virtual bool HideFromNavigation { get; set; }

    public string GetFullText()
    {
        return GlobalSearchFullTextHelper.Join(
            Heading,
            Description,
            BadgeText,
            ImageAltText,
            PrimaryCta?.Text,
            SecondaryCta?.Text);
    }
}
