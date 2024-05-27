import express from 'express';
import { AuthRoutes } from '../modules/user/user.routes';
import { PermissionGroupRoutes } from '../modules/permission_group/permission_group.route';
import { PermissionRoute } from '../modules/permission/permission.route';
import { UserRoleRoute } from '../modules/UserRole/UserRole.route';
import { UserRoutes } from '../modules/user-managment/user-managment.route';
import { BrandRoute } from '../modules/brand/brand.route';
import { blogRouter } from '../modules/blog/blog.route';
import { blogCategoryRouter } from '../modules/blogCategory/blogCategory.route';
import { categoryRouter } from '../modules/category/category.route';
import { AttributesRoute } from '../modules/attributes/attributes.route';
import { galleryRoute } from '../modules/gallery/gallery.route';
import { serviceRoute } from '../modules/service/service.route';
import {youtubeRouter} from "../modules/youtube/youtube.route";


const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoutes,
  },
  {
    path: '/permission-group',
    routes: PermissionGroupRoutes,
  },
  {
    path: '/permission',
    routes: PermissionRoute,
  },
  {
    path: '/user-role',
    routes: UserRoleRoute,
  },
  {
    path: '/user',
    routes: UserRoutes,
  },
  {
    path: '/brand',
    routes: BrandRoute,
  },
  {
    path: '/blog',
    routes: blogRouter,
  },
  {
    path: '/blog-category',
    routes: blogCategoryRouter,
  },
  {
    path: '/category',
    routes: categoryRouter,
  },
  {
    path: '/attribute',
    routes: AttributesRoute,
  },
  {
    path: '/image-upload',
    routes: galleryRoute,
  },
  {
    path: '/service',
    routes: serviceRoute,
  },
  {
    path: '/youtube',
    routes: youtubeRouter,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
