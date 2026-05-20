// utils/slugify.ts
export const createSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
};