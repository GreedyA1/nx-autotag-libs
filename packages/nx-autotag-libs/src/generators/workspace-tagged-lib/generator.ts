import {
  Tree,
} from '@nrwl/devkit';
import { libraryGenerator} from '@nrwl/workspace/generators';
import { Schema as WorkspaceLibrarySchema } from '@nrwl/workspace/src/generators/library/schema';


export default async function (
  tree: Tree,
  options: WorkspaceLibrarySchema
) {
  await libraryGenerator(tree, { ...options, tags: 'scope:' + (options.directory ?? options.name)  + (options.tags ? ', ' + options.tags : '') })
}
