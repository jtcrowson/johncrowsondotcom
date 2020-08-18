import { ScullyConfig } from '@scullyio/scully';
import { MultiMarkdownPageBuilderPlugin, createSingleMarkdownSection, MarkdownSectionBuilder } from 'scully-multi-markdown-page-builder-plugin';
import { DisableAngular } from 'scully-plugin-disable-angular'

const headerSectionBuilder: MarkdownSectionBuilder = {
  sectionBuilder: (markdownHtmls: string[]) => {
    const markdownHtml = markdownHtmls[0];
    const highlightedHtml = markdownHtml.replace(/John!/gi, name => `<span class="accent">${name}</span>`);
    return `<div id="headerContainer">${highlightedHtml}</div>`
  },
  markdownFileSources: ['./content/header.md'],
  extras: null
};

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "johncrowsondotcom",
  outDir: './dist/static',
  routes: {
    '': {
      type: MultiMarkdownPageBuilderPlugin,
      sectionBuilders: [
        headerSectionBuilder,
        createSingleMarkdownSection('./content/links.md', { containerDivId: null, elementDivId: "linksItem" })
      ],
      title: 'Demo Homepage',
      postRenderers: [ DisableAngular ]
    }
  }
};