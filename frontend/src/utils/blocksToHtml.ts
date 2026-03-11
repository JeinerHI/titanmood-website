import { marked } from 'marked';

// Configurar marked
marked.setOptions({
  breaks: true,
  gfm: true,
});

export async function blocksToHtml(content: any): Promise<string> {
  if (!content) return '';

  // Si es string directo (markdown)
  if (typeof content === 'string') {
    return await marked(content);
  }

  // Si es array de bloques
  if (Array.isArray(content)) {
    // CLAVE: Unir todos los bloques en un solo string de markdown
    const markdownText = content
      .map(block => {
        // Si es un bloque de texto simple
        if (block.type === 'text') {
          return block.text || '';
        }
        
        // Si tiene children (formato Strapi Rich Text)
        if (block.children && Array.isArray(block.children)) {
          return block.children
            .map((child: any) => child.text || '')
            .join('');
        }
        
        return '';
      })
      .filter(text => text.trim()) // Eliminar líneas vacías
      .join('\n\n'); // Unir con doble salto (importante para Markdown)

    // Convertir el markdown completo a HTML
    return await marked(markdownText);
  }

  return '';
}