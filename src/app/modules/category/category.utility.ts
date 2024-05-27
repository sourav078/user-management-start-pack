import prisma from '../../../shared/prisma';

async function getCategoryWithChildren(id: string) {
  const category = await prisma.category.findUnique({
    where: { id },
    include: { children: true, ProductCategory: false, Order: false },
  });

  if (!category) {
    throw new Error(`Category with id ${id} not found`);
  }

  if (category.children) {
    for (let i = 0; i < category.children.length; i++) {
      const childCategory = await getCategoryWithChildren(
        category.children[i].id,
      );
      if (childCategory) {
        category.children[i] = childCategory;
      }
    }
  }

  return category;
}

export default getCategoryWithChildren;
