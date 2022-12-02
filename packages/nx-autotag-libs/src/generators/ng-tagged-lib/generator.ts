import {
  Tree,
} from '@nrwl/devkit';
import { libraryGenerator} from '@nrwl/angular/generators';
import { Schema as AngularLibrarySchema } from '@nrwl/angular/src/generators/library/schema';


export default async function (
  tree: Tree,
  options: AngularLibrarySchema
) {
  await libraryGenerator(tree, { ...options, tags: 'scope:' + (options.directory ?? options.name)  + (options.tags ? ', ' + options.tags : '') })
}
