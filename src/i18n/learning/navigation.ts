import {
  SIDEBAR_NAV_GROUPS,
  createLessonNavigationItems,
  type SidebarNavGroup,
  type SidebarTechnology,
} from '@/config/routes';
import { APP_COPY } from '@/i18n/app';
import { localizePath, type Locale } from '@/i18n/config';

export type LocalizedLearningNavigation = {
  groups: SidebarNavGroup[];
  lessonItems: ReturnType<typeof createLessonNavigationItems>;
  tracks: SidebarTechnology[];
};

/**
 * Translates the static route graph and gives every page a canonical locale
 * URL. The proxy rewrites these URLs to the existing route files internally,
 * so browser history, bookmarks, and Previous/Next navigation retain locale.
 */
export function getLocalizedLearningNavigation(
  locale: Locale,
): LocalizedLearningNavigation {
  const labels = APP_COPY[locale].sidebarLabels;
  const translate = (value: string) => labels[value] ?? value;
  const groups = SIDEBAR_NAV_GROUPS.map((group) => ({
    ...group,
    label: translate(group.label),
    technologies: group.technologies.map((technology) => ({
      ...technology,
      href: technology.href ? localizePath(locale, technology.href) : undefined,
      description: translate(technology.description),
      label: translate(technology.label),
      sections: technology.sections.map((section) => ({
        ...section,
        title: translate(section.title),
        links: section.links.map((link) => ({
          ...link,
          href: localizePath(locale, link.href),
          label: translate(link.label),
          children: link.children?.map((child) => ({
            ...child,
            href: localizePath(locale, child.href),
            label: translate(child.label),
          })),
        })),
      })),
    })),
  }));

  return {
    groups,
    lessonItems: createLessonNavigationItems(groups),
    tracks: groups.flatMap((group) => group.technologies),
  };
}
