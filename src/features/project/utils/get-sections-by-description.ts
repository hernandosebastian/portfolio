import { TechnologySection } from "@/features/project/interfaces/technology-section.interface";

export function getSectionsByDescription(
  description: string
): TechnologySection[] {
  return separateSectionsByLine(description)
    .map((line) => {
      const isTechnologySection = line.startsWith("- ");

      if (isTechnologySection) {
        return createCategoryAndItemsByLine(line);
      }
      return null;
    })
    .filter(filterValidTechnologySections);
}

function separateSectionsByLine(description: string): string[] {
  return description.split("\n");
}

function createCategoryAndItemsByLine(line: string): TechnologySection {
  const [category, items] = separateCategoryAndItemsByLine(line);
  return {
    category,
    items: items.split(". "),
  } as TechnologySection;
}

function separateCategoryAndItemsByLine(line: string): [string, string] {
  const [category, items] = line.substring(2).split(": ");
  return [category, items];
}

function filterValidTechnologySections(
  section: TechnologySection | null
): section is TechnologySection {
  return section !== null;
}
