<?php
/**
 * @file
 * caf_bundle.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function caf_bundle_taxonomy_default_vocabularies() {
  return array(
    'site_map' => array(
      'name' => 'Site Map',
      'machine_name' => 'site_map',
      'description' => 'Basic Structure of the Site',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
      'rdf_mapping' => array(
        'rdftype' => array(
          0 => 'skos:ConceptScheme',
        ),
        'name' => array(
          'predicates' => array(
            0 => 'dc:title',
          ),
        ),
        'description' => array(
          'predicates' => array(
            0 => 'rdfs:comment',
          ),
        ),
      ),
    ),
  );
}
