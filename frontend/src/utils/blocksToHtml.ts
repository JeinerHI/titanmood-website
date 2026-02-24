// Convertir Strapi Blocks a HTML
export function blocksToHtml(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  
  return blocks.map(block => {
    if (block.type === 'paragraph') {
      const content = block.children
        .map((child: any) => {
          if (child.type === 'text') {
            let text = child.text;
            if (child.bold) text = `<strong>${text}</strong>`;
            if (child.italic) text = `<em>${text}</em>`;
            return text;
          }
          return '';
        })
        .join('');
      return `<p>${content}</p>`;
    }
    
    if (block.type === 'heading') {
      const level = block.level || 2;
      const content = block.children.map((child: any) => child.text).join('');
      return `<h${level}>${content}</h${level}>`;
    }
    
    return '';
  }).join('');
}